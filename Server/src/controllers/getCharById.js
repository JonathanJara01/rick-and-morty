const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/";


const getCharById = async (req, res)=>{
    try {
        const {id} = req.params;
        const {data} = await axios.get(`${URL}${id}`)

        let character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            origin: data.origin,
            image: data.image,
            status: data.status,
            species: data.species,
          };
          return character.name
            ? res.json(character)
            : res.status(404).send("Not found!");
        } catch (error) {
          res.status(500).send(error.message);
        }
};

module.exports = {
    getCharById,
};


















/* const getCharById = (req, res)=>{
    const {id} = req.params
    const urlId = `${URL}${id}` 
    axios.get(urlId).then((response) =>{
        const character = response.data
        if(character){
            const { id, status, name, species, origin, image, gender} = character;
            const characterId =  { id, status, name, species, origin, image, gender}
            res.json(characterId)
    } else{
        res.status(404).send('Not fount')
    }
    })
    .catch(error =>{
        res.status(500).send(error.message)
    })
}; */

/* const axiosFunction = async () =>{

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const dataApi = response.data
        console.log(dataApi);
  

    } catch (error) {
        console.log(error);
    }
}

console.log(axiosFunction()); */






















////////////////// SINTAXIS DE COMMON.JS ///////////////


/* const axios = require('axios')


const getCharById = (res, id) =>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(respuesta => {
        const {name, gender,species, id, origin, image, status } = respuesta.data
        const character = {name, gender,species, id, origin, image, status}
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(character));
    })
    .catch(error => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(error);
    } )
}


module.exports = getCharById */