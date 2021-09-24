import { waitForElementToBeRemoved } from '@testing-library/dom';
import { useEffect, useState } from 'react';
import data from '../data/club.json'
import '../styles/App.scss';

function App() {
  const [club, setClub ]=useState(data);
  //Variables para guardar nuevos estados de los inputs
  const[ newClub, setNewClub ]=useState({
    name: '',
    openOnWeekdays: false,
    openOnWeekend: false,

  });

   const handleNewClub=(ev)=>{
   if(ev.currentTarget.id === 'new'){
     setNewClub({
       ...newClub,
       new: ev.currentTarget.value,
     });
   }else if(ev.currentTarget.id=== 'option1'){
     setNewClub({
       ...newClub,
       openOnWeekdays: ev.currentTarget.checked,
     });
   }else if(ev.currentTarget.id=== 'option2'){
    setNewClub({
      ...newClub,
      openOnWeekend: ev.currentTarget.checked,
    });
    }
   };

  const handleNewClubButton=(ev)=>{
    ev.preventDefault();
    if (newClub.name !== '') {
      setClub([...club, newClub]);
    }
    setNewClub({
      name: '',
      openOnWeekdays: false,
      openOnWeekend: false,
    });
}

  const renderClub=()=>{
    return data.map((club, index)=>{
      return(
        <li key={index} id={index} className="list__club">
        <h3 className="name__club">{club.name}</h3>
        <p className="week__day">Abierto entre semana: {club.openOnWeekdays === true ? 'si' : 'No'}</p>
        <p className="week__end"> abierto los fines de semana: {club.openOnWeekend === true ? 'si' : 'No' }</p>
        </li>

      )
    })
  }
  return (
    <div>
      <header>
      <h1 className="header__tittle">Mis clubs</h1>
      <form>
        <label htmlFor="club">Mostrar</label>
        <select name="club" id="club">
          <option>Todos</option>
          <option> los que abren entre semana</option>
          <option>los que abren el fin de semana</option>
        </select>
      </form>
      </header>
      <main>
      <ul className="list__club">{renderClub()}</ul>
      <section>
        <h2 className="main__tittle">Añadir un nuevo club</h2>
        <form className="main__form">
          <label className="form__label-club"> Nombre del club </label>
        <input
            className="form__input"
            type="text"
            name="new"
            id="new"
            onChange={handleNewClub}
          />
          <label htmlFor="option1">¿Abre entre semana?</label>
          <input type="checkbox" name="option1" id="option1" onChange={handleNewClub} checked={newClub.openOnWeekdays}/>
          <label htmlFor="option2">¿Abre los fines de  semana?</label>
          <input type="checkbox" name="option2" id="option2" onChange={handleNewClub} checked={newClub.openOnWeekend}/>

          <input type="submit" value="añadir" className="new_club" onClick={handleNewClubButton}/>

          
        </form>

      </section>
      </main>
      
    </div>
  );
}

export default App;
