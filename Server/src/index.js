const express = require('express');
const router = require('./routes/index');

const server = express();
const PORT = 3001;

server.use(express.json()); /// el .json parsea la informacion a formato json.
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
       );
       res.header(
           'Access-Control-Allow-Methods',
           'GET, POST, OPTIONS, PUT, DELETE'
           );
           next();
        });

        
server.use('/rickandmorty', router); /// este middleware siempre nos arrojara al principio de cada url rick and morty ejemplo rickandmorty/home.


server.listen(PORT, ()=> {
        console.log(`Server raised in port: ${PORT}` );
        });
        
        













































/* const http = require('http'); */
//const data = require("./utils/data") // es mejor poner character que data
//var fs = require("fs");
/* const getCharById = require('./controllers/getCharById')

http.createServer((request, res)=>{
res.setHeader('Access-Control-Allow-Origin', '*');

if(request.url.includes("/rickandmorty/character")){
    const id = request.url.split("/").pop()
    getCharById(res, id) /// para parsearlo podemos hacer ParseInt(id)
}  else {
    res.writeHead(404,{'Content-Type': 'text/plain'});
    res.end("Personaje no encontrado")
}

}).listen(3001, "localhost") */
// if(request.url.includes("/rickandmorty/character/")){
//     const id = request.url.split("/").pop(); // podemos reemplazar el .pop por un .at(-1)
//     const character = data.find((character)=> character.id === parseInt(id));

//     if(character){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(character)); // JSON.stringify convierte todo archivo JSON en string
//     } 
//     else {
//         res.writeHead(404,{'Content-Type': 'text/plain'});
//         res.end("Personaje no encontrado")
//     } 
// }
//     else {
//     res.writeHead(400, { 'Content-Type': 'text/plain' });
//     res.end("URL inválida");
//   }