import style from './SearchBar.module.css';
import { useState } from 'react';
import imageBoton from '../components/gifrickdeinicio.gif'


const SearchBar =({onSearch}) => {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value); // esto es lo que yo estoy escribien do en el input osea el evento
   };


   return (
      <div className={style.contenedor}>
         <input classname={style.input} type='search' onChange={handleChange} value={id}/> {/* onChange es lo que hago cuando cambie el valor del input y tambien tenemos que ponerle al value si id correspondiente*/}
         <button className={style.boton}onClick={() => {onSearch(id)}}>
         <img src={imageBoton}  width='120px' height='120px' 
         alt='imagenBoton'></img></button>{/* le paso a onSearch una callback que es una funcion que recibe un id para que se ejecute de manera repetitiva*/}
      </div>
   );
};

export default SearchBar;