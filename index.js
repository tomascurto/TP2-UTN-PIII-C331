const express = require ("express")
const app = express()
const cors = require ("cors")
const cantantesRouter = require("./routes/cantantesRouter")
const albumesRouter = require("./routes/albumesRouter")
const db = require ("./data/db.js") 
require('./models/relaciones');  // Importa la relacion entre albumes y cantantes



app.use(cors()) // habilitar el intercambio de informacion de origen cruzado
app.use(express.json()) // analiza los request

const port = 3030


// HOME
app.get ("/",(req,res)=>{
    res.send ("Colección de albumes")
})

// Envia los request a sus respectivas rutas
app.use("/cantantes", cantantesRouter);
app.use("/albumes", albumesRouter);

// conexion a la base de datos
const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log("conexion ok a la base de datos");
        
    } catch (error) {
        console.log(`hay un error y es el siguiente ${error}`);
        
    }
}


app.listen (port,()=>{
    conexionDB()
    console.log(`Servidor ok en el puerto ${port}`);
    
})