import { useEffect, useState } from 'react';
import data from '../data/club.json'
import '../styles/App.scss';

function App() {
  const [club, setClub ]=useState(data);
  //Variables para guardar nuevos estados de los inputs
  const[ newclub, setNewClub ]=useState('');
   
   const handleNewClub=(ev)=>{
     setNewClub(ev.currentTarget.value);

   };


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
            name="newclub"
            id="newclub"
            value={newclub}
            onChange={handleNewClub}
          />
          <label htmlFor="option1">¿Abre entre semana?</label>
          <input type="checkbox" name="option1" id="option1"/>
          <label htmlFor="option2">¿Abre los fines de  semana?</label>
          <input type="checkbox" name="option2" id="option2"/>

          <input type="submit" value="añadir" className="new_club"/>

          
        </form>

      </section>
      </main>
      
    </div>
  );
}

export default App;
