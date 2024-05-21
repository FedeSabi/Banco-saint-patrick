import express from 'express';
import User from '../Schemas/Schema-loging.js';
import bcryptjs from 'bcryptjs'

import jwt from 'jsonwebtoken'

const router = express.Router();




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

     
        const user = await User.findOne({ numeroTarjeta });
console.log(user);
        if (!user) {
            return res.status(404).json({ error: 'El número de tarjeta proporcionado no está registrado.' });
        }

       
        if (pin !== user.pin) {
            return res.status(401).json({ error: 'PIN incorrecto.' });
        }
ón
        const token = jwt.sign({ numeroTarjeta: user.numeroTarjeta }, 'secreto');
console.log(token);
        res.status(200).json({ message: 'Inicio de sesión exitoso.', nombre : user.nombre, token});
        console.log('sesion iniciada');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ha ocurrido un error al intentar iniciar sesión.' });
    }
});


export default router;
