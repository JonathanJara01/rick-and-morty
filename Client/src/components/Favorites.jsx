import { connect, useDispatch } from "react-redux";
import Card from "./Card"
import {filterCards, orderCards} from "./redux/actions"
import {useState} from "react";
import Favoritos from '../components/Favoritos.module.css';


const Favorites = ({myFavorites}) => {
    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handlerOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    setAux(!aux)
    };

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (
        <div className={Favoritos}>

        <select onChange={handlerOrder}>
        <option value="A">Ascendente</option>
        <option value="B">Descendente</option>
        </select>

        <select onChange={handlerFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        </select>


            {
                myFavorites?.map(({name, species, gender, origin, image, id, onClose}) => {
                    return (
                        <Card 
                        key={id} 
                        id = {id}
                        name = {name}
                        species = {species}
                        gender = {gender}
                        origin = {origin.name}
                        image = {image}
                        onClose={onClose}
                        />
                    )
                })
            }

        </div>

    )
}

const mapStateToProps = (state) => {

    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);