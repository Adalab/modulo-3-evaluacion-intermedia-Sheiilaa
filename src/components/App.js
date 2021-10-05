
import { useEffect, useState } from 'react';
import data from '../data/club.json'
import '../styles/App.scss';


function App() {
  const [clubs, setClubs ]=useState(data);
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
     clubs.push({
      name: name,
      openOnWeekdays: openOnWeekdays,
      openOnWeekend: openOnWeekend,

     });
     setClubs([...clubs])
   };
   //Función manejadora del filtro
   const handleFilter=(ev)=>{
    setFilter(ev.target.value);
   };
   const handleDelete = (ev) => {
    ev.preventDefault();
    const id = ev.currentTarget.id;
    clubs.splice(id, 1);
    setClubs([...clubs]);
   
  };
  
//Esta es la función la cual nos pinta en el index
  const renderClub=()=>{
    return clubs //Primero hacemos el el filtro
    .filter((club)=>{
      if (filter === 'openOnWeekDays'){
        return club.openOnWeekdays===true;
      }else if( filter=== 'openOnWeekend'){
        return club.openOnWeekend ===true;
      }
      return true;
    })
    .map((club, index)=>{ //Después pintamos en el index
      return(
        <li key={index} id={index} className="list__club">
        <h3 className="name__club">{club.name}</h3>
        <p className="week__day">Abierto entre semana: {club.openOnWeekdays === true ? 'si' : 'No'}</p>
        <p className="week__end"> Abierto los fines de semana: {club.openOnWeekend === true ? 'si' : 'No' }</p>
        <div>
          <button className="button__delete" onClick={handleDelete}>X</button>
        </div>
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
          <option value="all">Todos</option>
          <option value="openOnWeekDays"> Los que abren entre semana</option>
          <option value="openOnWeekend">Los que abren el fin de semana</option>
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
        
          <input type="submit" value="Añadir nuevo club" className="new_club" />

         
        </form>

      </section>
      </main>
      
    </div>
  );
}

export default App;
