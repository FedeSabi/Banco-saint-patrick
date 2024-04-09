import express from 'express';
import User from '../Schemas/Schema-loging.js';

const router = express.Router();





router.post('/registrarse', async (req, res) => {

    try {
        const { nombre, numeroTarjeta, pin } = req.body
        const newuser = new User({
            nombre,
            numeroTarjeta,
            pin,

        })

        console.log(nombre, numeroTarjeta, pin);

        const user = await newuser.save()




        res.json(user);



    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'No se pudo registrar el usuario' });
    }

});

router.post('/logearse', async (req, res) => {
    try {
        const { numeroTarjeta, pin } = req.body;

        // Buscar en la base de datos si existe un usuario con el número de tarjeta proporcionado
        const user = await User.findOne({ numeroTarjeta });

        // Si no se encuentra el usuario, devuelve un mensaje de error
        if (!user) {
            return res.status(404).json({ error: 'El número de tarjeta proporcionado no está registrado.' });
        }

        // Compara el PIN proporcionado con el PIN almacenado en la base de datos
        if (pin !== user.pin) {
            return res.status(401).json({ error: 'PIN incorrecto.' });
        }

        // Si el número de tarjeta y el PIN son correctos, se puede iniciar sesión
        // Puedes realizar cualquier acción adicional aquí, como generar un token de sesión

        res.status(200).json({ message: 'Inicio de sesión exitoso.', nombre : user.nombre});
        console.log('sesion iniciada')
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ha ocurrido un error al intentar iniciar sesión.' });
    }
});

export default router