import { useState } from "react";
import axios from "axios"
import { Link,Navigate} from "react-router-dom";


const Registrarse = () => {

    const [nombre, setNombre] = useState("");
    const [numeroTarjeta, setNumeroTarjeta] = useState("");
    const [pin, setPin] = useState("");
    const [mensaje, setMensaje] = useState(false);
    const [envioMensaje, setEnvioMensaje] = useState("");


   
  

    const EnvioFormulario = async (event) => {

        event.preventDefault()
        try {
            const respuesta = await axios.post('http://localhost:5000/Registrarse', { nombre, numeroTarjeta : Number(numeroTarjeta), pin : Number(pin) });

            setMensaje(true);
            setEnvioMensaje('Formulario enviado con exito!!!');
            setNombre("");
            setNumeroTarjeta("");
            setPin("");

        } catch (error) {
            console.log('error al registrarse', error)
        }
    }


    if (mensaje) {
        return <Navigate to='/' />;


    }



    return (
        <div>
            <div className='flex justify-center'>
                <img className='w-48 md:w-56   h-auto mt-10 md:mt-12 lg:mt-14 xl:mt-16' src="/image.png" alt="" />
            </div>

            <div className='flex justify-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-serif font-semibold'>Saint Patrick</h1>
            </div>
            <div className='flex justify-center items-end h-[80px]  mt-[51px]'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-custom font-normal ml-[10px] mr-[10px]'>
                    Para registrarse, Por favor complete sus datos
                </h1>

            </div>
            <div className=" text-green-500 flex justify-center mt-[25px]">
                {envioMensaje}
            </div>
            <div className=" flex items-center justify-center h-[37vh]">
                <div className="bg-white  rounded-lg  max-w-[37rem] w-full ml-[10px] mr-[10px]">

                    <form onSubmit={EnvioFormulario}>
                        <div className="mb-4">

                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} id="fullName" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Nombre" />
                        </div>
                        <div className="mb-4">

                            <input type="text" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} id="numero" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Numero de tarjeta" />
                        </div>
                        <div className="mb-6">

                            <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} id="pin" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="PIN" />
                            <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
                        </div>
                        <button type="submit" className="w-full bg-customGray text-customBlack px-4 py-2 rounded-lg hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
                        <p className="text-gray-600 text-xs text-center mt-4">
                            By clicking Register, you agree to accept Apex Financial's
                            <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
                        </p>
                    </form>

                </div>
            </div>
            <div className="flex justify-center ">
                <div className="flex justify-around items-center w-[50%] ">
                    <Link className="font-custom font-normal text-sm border-b-2 border-gray-400 text-gray-500" to="/terminos-y-condiciones">Términos y condiciones</Link>
                    <Link className="font-custom font-normal text-sm border-b-2 border-gray-400 text-gray-500" to="/seguridad-del-sistema">Seguridad del sistema</Link>
                    <Link className="font-custom font-normal text-sm border-b-2 border-gray-400 text-gray-500" to="/contacto">Contacto</Link>
                </div>



            </div>

        </div>



    )
}

export { Registrarse }