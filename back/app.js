import express  from "express";
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "./DB.js"

import router from "./routes/User.js";

const app =express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(process.env.PUERTO, ()=> {

    console.log(`Conectado en el puerto ${process.env.PUERTO}`);
})

