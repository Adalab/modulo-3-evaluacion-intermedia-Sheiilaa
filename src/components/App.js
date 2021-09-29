
import { useEffect, useState } from 'react';
import data from '../data/club.json'
import '../styles/App.scss';


function App() {
  const [club, setClub ]=useState(data);
  //Variables para guardar nuevos estados de los inputs
  const [name, setName] = useState(''); 
  const [openOnWeekdays, setOpenOnWeekdays] = useState(false);
  const [openOnWeekend, setOpenOnWeekend] = useState(false);
  //Creamos la variable de estado  para el filter
  const [filter, setFilter]= useState ('all');

    const handleName=(ev)=>{
      setName(ev.target.value);
    };
    //En el input tipo text cogeremos el value, mientras que en el de tipo chexbox recogeremos el checked, lo cual nos dira si hemos cambiado de false a true 
    const handleOpenWeekdays=(ev)=>{
      setOpenOnWeekdays(ev.target.checked);
    };
    const handleOpenOnWeekend=(ev)=>{
      setOpenOnWeekend(ev.target.checked);
    };
    //En este boton, añadiremos con el push el nuevo objeto creado por el usuario
   const handleSubmit =(ev)=>{
     ev.preventDefault();
     club.push({
      name: name,
      openOnWeekdays: openOnWeekdays,
      openOnWeekend: openOnWeekend,

     });
     setClub([...club])
   };
   //Función manejadora del filtro
   const handleFilter=(ev)=>{
    setFilter(ev.target.value);
   };
  
//Esta es la función la cual nos pinta en el index
  const renderClub=()=>{
    return club //Primero hacemos el el filtro
    .filter((clubs)=>{
      if (filter === 'openOnWeekDays'){
        return clubs.openOnWeekdays===true;
      }else if( filter=== 'openOnWeekend'){
        return clubs.openOnWeekend ===true;
      }
      return true;
    })
    .map((club, index)=>{ //Después pintamos en el index
      return(
        <li key={index} id={index} className="list__club">
        <h3 className="name__club">{club.name}</h3>
        <p className="week__day">Abierto entre semana: {club.openOnWeekdays === true ? 'si' : 'No'}</p>
        <p className="week__end"> Abierto los fines de semana: {club.openOnWeekend === true ? 'si' : 'No' }</p>
        </li>

      )
    })
  }
  return (
    <div>
      <header>
      <h1 className="header__title">Mis clubs</h1>
      <form className="header_form">
        <label htmlFor="club" className="header_form__label">Mostrar </label>
        <select value ={filter} onChange={handleFilter} className="header_form__select">
          <option>Todos</option>
          <option> Los que abren entre semana</option>
          <option>Los que abren el fin de semana</option>
        </select>
      </form>
      </header>
      <main>
      <ul >{renderClub()}</ul>
      <section className="main__section">
        <h2 className="main__tittle">Añadir un nuevo club</h2>
        <form className="main__form" onSubmit={handleSubmit}>
          <label className="form__label-club"> Nombre del club </label>
        <input
            className="form__input"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
          />
          <label htmlFor="option1">¿Abre entre semana?</label>
          <input type="checkbox" name="option1" id="option1" onChange={handleOpenWeekdays} checked={openOnWeekdays}/>
          <label htmlFor="option2">¿Abre los fines de  semana?</label>
          <input type="checkbox" name="option2" id="option2" onChange={handleOpenOnWeekend} checked={openOnWeekend}/>

          <input type="submit" value="añadir" className="new_club" />

          
        </form>

      </section>
      </main>
      
    </div>
  );
}

export default App;
