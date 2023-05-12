import style from "./Card.module.css"
import {Link} from "react-router-dom";
import {addFav, removeFav} from "./redux/actions.js"
import {connect} from "react-redux"
import { useState, useEffect} from "react";




const Card = ({id, name, species, status, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => { 
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({id, name, species, status, gender, origin, image, onClose}); // si el removefav esta en true pasa los datos que tiene addFav.
      setIsFav(!isFav); // si es verdad que settee lo contrario sea verdadero o falso
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.wrapper}>
      <div className={style.card}>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <Link to = {`/Detail/${id}`}> {/* esto esta con template string y su direccion hacia detail ademas concatenandole el ID y destructurandolo para que pueda saber que hay dentro del prop id*/}
               <img src={image} alt='' />
               <button onClick={()=>{onClose(id)}}>CERRAR</button>
               <h2>
               id:{id}<li></li>
               Name:{name}<li></li>
               Species:{species}<li></li>
               Status:{status}<li></li>
               Gender:{gender}<li></li>
               Origin:{origin}
               </h2>
               </Link>
               </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch)=>{
   return{
      addFav: (character) => dispatch(addFav(character)), //esta funcion es para agregar a favoritos lo que recibe por parametro en el addfav es un caracter y luegon se lo volvemos a pasar en dispatch
      removeFav: (id) => dispatch(removeFav(id)) // esta funcion es para quitar de favoritos igual aca abajo
   }
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);