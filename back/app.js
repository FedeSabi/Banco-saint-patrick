import express  from "express";
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "./DB.js"
import router from "./routes/User.js";

const app =express()
dotenv.config()

const corsOptions = {
    origin: 'http://localhost:5173', // Cambia esto por el origen de tu aplicación web
    optionsSuccessStatus: 200 // Algunos navegadores antiguos (IE11) pueden mostrar errores sin esta opción
  };
  
app.use(cors(corsOptions));
app.use(express.json())

app.get('/', (req, res)=>{

    res.send('Respuesta desde el servidor.')
})

app.use(router)

app.listen(process.env.PUERTO, ()=> {

    console.log(`Conectado en el puerto ${process.env.PUERTO}`);
})

