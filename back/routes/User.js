<<<<<<< HEAD
import express from 'express';
import User from '../Schemas/Schema-loging.js';
import bcryptjs from 'bcryptjs'

import jwt from 'jsonwebtoken'
=======
import express from "express";
import User from "../Schemas/Schema-loging.js";
>>>>>>> e9dd49af13639d6f955edba1b208a8f67699b363

const router = express.Router();

router.post("/registrarse", async (req, res) => {
  try {
    const { nombre, numeroTarjeta, pin } = req.body;
    const newuser = new User({
      nombre,
      numeroTarjeta,
      pin,
    });

    console.log(nombre, numeroTarjeta, pin);

    const user = await newuser.save();


router.post("/registrarse", async (req, res) => {
    try {
      const { nombre, numeroTarjeta, pin } = req.body;
      console.log(typeof pin);
      const encriptado = bcryptjs.hashSync((pin),10) 
      const newuser = new User({
        nombre,
        numeroTarjeta,
        pin:encriptado,
      });
     
      console.log( encriptado);
  
      const user = await newuser.save();
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "No se pudo registrar el usuario" });
    }
  });

  router.post('/logearse', async (req, res) => {
    try {
        const { numeroTarjeta, pin } = req.body;
        console.log(`Received numeroTarjeta: ${numeroTarjeta}, PIN: ${pin}`);

        if (!numeroTarjeta || !pin) {
            return res.status(400).json({ error: 'Número de tarjeta y PIN son requeridos.' });
        }

        const user = await User.findOne({ numeroTarjeta });
        console.log(`Found user: ${user}`);

        if (!user) {
            return res.status(404).json({ error: 'El número de tarjeta proporcionado no está registrado.' });
        }

        const isMatch = await bcrypt.compare(pin, user.pin);
        if (!isMatch) {
            console.log('PIN incorrecto');
            return res.status(401).json({ error: 'PIN incorrecto.' });
        }

        const token = jwt.sign({ numeroTarjeta: user.numeroTarjeta }, 'secreto', { expiresIn: '1h' });

        res.status(200).json({ message: 'Inicio de sesión exitoso.', nombre: user.nombre, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ha ocurrido un error al intentar iniciar sesión.' });
    }

    // Compara el PIN proporcionado con el PIN almacenado en la base de datos
    if (pin !== user.pin) {
      return res.status(401).json({ error: "PIN incorrecto." });
    }

    // Si el número de tarjeta y el PIN son correctos, se puede iniciar sesión
    // Puedes realizar cualquier acción adicional aquí, como generar un token de sesión

    res
      .status(200)
      .json({ message: "Inicio de sesión exitoso.", nombre: user.nombre });
    console.log("sesion iniciada");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al intentar iniciar sesión." });
  }
});

export default router;
