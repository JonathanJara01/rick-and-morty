import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Home from './components/Home.jsx';
import Forms from './components/Form.jsx';
import Favorites from './components/Favorites.jsx'


const EMAIL = 'jonathan@gmail.com';
const PASSWORD = 'una1234';

/*const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};*/

function App() {
const [characters,  setCharacters] = useState([]);
const {pathname} = useLocation();

const navigate = useNavigate();
const [access, setAccess] = useState(false);


function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access, navigate]); // De esta forma, useEffect se volverá a ejecutar cada vez que navigate cambie de valor.


 /*const onSearch = (id) =>{
   setCharacters ([...characters, example])
}*/

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
};

   const onClose = (id) => {
   setCharacters(characters.filter((character) => character.id !== Number(id))); // logica de javascript con un metodo filter para saber que los ids sean diferentes y si lo son haga la comparativa con el Number(id) y se traspase de string a numero.
   };


   return (
      <div className='App'>
      {pathname !== '/' && <NavBar onSearch={onSearch}/>} {/* esta navbar esta fija todo el tiempo porque esta por fuera del routes, esto hace que aparezca en todos lados*/}

      <Routes>
         <Route path='/' element={<Forms login={login}/>}/>
         <Route path='/home' element={<div><Home /><Cards characters={characters} onClose={onClose}/></div>} />
         <Route path='/About' element={<About/>}/>
         <Route path='/Detail/:id' element={<Detail/>}/>
         <Route path='/favorites' element= {<Favorites/>}/>
      </Routes>

         
      </div>
   );
}

export default App;
