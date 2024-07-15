const express = require('express')
// en app tengo toda la funcionalidad de express
const app = express()

//Configurar el archivo manejo de las variables de entorno
const dotenv = require('dotenv')

const api = require('./routes/api.routes')

dotenv.config();
const port = process.env.PORT
const databaseConnect = require('./db/config')
databaseConnect()

//Para que express entienda los archivos formato JSON
app.use(express.json())
//Para que express reconozca las urls
app.use(express.urlencoded({ extended: false }))

//para usar las ruta
app.use('/', api)

//colocar a escuchar el servidor express
app.listen(port, () => {
    console.log(`Servidor conectado en el puerto ${port}`)
})