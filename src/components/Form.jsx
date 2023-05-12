import { useState } from "react"
import Validation from "./Validation.js";



const Forms = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const hadleChange = (e) => {
        setErrors(Validation({...userData,[e.target.name]: e.target.value}));
        setUserData({
            ...userData, // copiamos todo lo que tenga userData y lo guardamos en userData2, para no perderlo y poder modificarlo
            // userData2: userData, // asi tambien se puede hacer, pero no es recomendable porque se pierde la referencia de userData
            // userData2: {...userData}
            [e.target.name]: e.target.value // el event.target.name es lo que se modifica y se iguala al event.target.value como valor nuevo agregado
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    return (
        <div>
            <form>
                <label htmlFor="emanil"> Email: </label>
                <input onChange={hadleChange}value={userData.email} type="text" name="email" />
                { errors.e1 ? (<p>{errors.e1}</p>) 
                : errors.e2 ?(<p>{errors.e2}</p>) 
                : (<p>{errors.e3}</p>)
                };
                <hr/>
                <label htmlFor="emanil"> Password: </label>
                <input onChange={hadleChange}value={userData.password} type="text" name="password" />
                { errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)
                };
                <hr/>
                <button onClick={handleSubmit} type="submit"> Enviar </button>
            </form>
        </div>
    )
};

export default Forms;