// npm init -y esto crea el package.json y debemos realizar cambios.
//asi podemos ejecutar como produccion npm run dev si necesidad de nodemon.
//con node index.js podemos leer esto
//con npm i nodemon -g y luego ejecutar nodemon index.js y veremos los cambios altiro sin necesidad de colocar otra vez el cmd.
// console.log("hola mundo!!")

const express = require('express');
require('dotenv').config();
const cors= require('cors');

const { dbConnection } = require('./database/config');

// console.log( process.env );  



//crear el servidor de express

const app = express();

//base de datos
dbConnection();


//CORS
app.use(cors());


//directorio publico

app.use( express.static( 'public' ));


//Lectura y parseo del body
app.use( express.json());





//Rutas

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));




//Escuchar peticiones

app.listen( process.env.PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
});
