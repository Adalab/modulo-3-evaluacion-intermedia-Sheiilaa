import { useEffect, useState } from 'react';
import '../styles/App.scss';

function App() {
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
      <ul className="list__club"></ul>
      <section>
        <h2 className="main__tittle">Añadir un nuevo club</h2>
        <form className="main__form">
          <label className="form__label-club"> Nombre del club </label>
        <input
            className="form__input"
            autoComplete='off'
            type='search'
            name='search'
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
