const { Client } = require('pg');
const express = require('express')
const app = express()

const conectionPG = {
    user: 'postgres',
    password: 'Jupiterx24',
    host: 'localhost',  // Localhost es MI COMPUTADOR
    database: 'postgres',
    port: '5432',
};


const bodyParser = require('body-parser')

//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'))


//Especificar ubicación de la carpeta pública
 app.use(bodyParser.urlencoded({extended: false}))










/* INICIO DEL SERVIDOR */
 
var server = app.listen(9090, () => {
    console.log('Servidor web iniciado')
})
 