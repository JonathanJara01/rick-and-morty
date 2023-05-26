import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './Detail.module.css';



const Detail = () => {

  const {id} = useParams(); // el useParams nos permite extraer el id que se modifica y llega a traves de la url.
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);


    return (
    <div className={style.detail}>
      <img src={character.image && character.image} alt="" />
      <h1>Name:{character.name && character.name}</h1>
      <h1>Status:{character.status && character.status}</h1>
      <h1>Species:{character.species && character.species}</h1>
      <h1>Gender:{character.gender && character.gender}</h1>
      <h1>Origin:{character.origin?.name && character.origin?.name}</h1> {/* toca hacer el ? como condicional chainning -- vos que vas a etsar viniendo una api como peticion asincrona.*/}
    <Link to={'/home'}>
      <button className={style.button}>Volver</button>
    </Link>

    </div>
  );
};

export default Detail;