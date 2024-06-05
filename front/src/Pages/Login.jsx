import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ setLogin }) => {
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [pin, setPin] = useState("");
  const [mensaje, setMensaje] = useState(false);
  const [envioMensaje, setEnvioMensaje] = useState("");

  console.log(numeroTarjeta);
  console.log(pin);

  const EnvioFormulario = async (event) => {
    event.preventDefault();
    try {
      const respuesta = await axios.post("https://banco-saint-patrick.onrender.com/logearse", {

        numeroTarjeta,
        pin,
      });
      console.log(respuesta);
      setLogin(respuesta.data.nombre);
      console.log(respuesta.data.token);
      setMensaje(true);
      setEnvioMensaje("sesion iniciada!!!");

      setNumeroTarjeta("");
      setPin("");
    } catch (error) {
      console.log("Respuesta del servidor:", error.response.data);
      setEnvioMensaje(error.response.data.error);
    }
  };

  

  return (
    <div className="bg-customBg ">
      <div className="flex justify-center">
        <img
          className="w-48 md:w-56   h-auto mt-10 md:mt-12 lg:mt-14 xl:mt-16"
          src="/image.png"
          alt=""
        />
      </div>

      <div className="flex justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-serif font-semibold">
          Saint Patrick
        </h1>
      </div>
      <div className="flex justify-center items-end h-[80px]  mt-[51px]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-custom font-normal ml-[10px] mr-[10px]">
          Para iniciar sesión, Por favor complete sus datos
        </h1>
      </div>
      <div className=" text-green-500 flex justify-center mt-[25px]">
        {envioMensaje}
      </div>
      <div className=" flex items-center justify-center h-[37vh]">
        <div className="bg-white  rounded-lg  max-w-[37rem] w-full ml-[10px] mr-[10px]">
          <form className="bg-customBg " onSubmit={EnvioFormulario}>
            <div className="mb-4">
              <input
                type="numero"
                value={numeroTarjeta}
                onChange={(e) => setNumeroTarjeta(e.target.value)}
                id="numero"
                className=" bg-customBg form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="Numero de tarjeta"
              />
            </div>
            <div className="mb-6">
              <input
                type="numero"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                id="pin"
                className=" bg-customBg form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="PIN"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-customGray text-customBlack px-4 py-2 rounded-lg hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Continuar
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex justify-around items-center w-[50%] ">
          <Link
            className="font-custom font-normal text-sm border-b-2 border-gray-400 text-gray-500"
            to="/terminos-y-condiciones"
          >
            Términos y condiciones
          </Link>
          <Link
            className="font-custom font-normal text-sm border-b-2 border-gray-400 text-gray-500"
            to="/seguridad-del-sistema"
          >
            Seguridad del sistema
          </Link>
          <Link
            className="font-custom font-normal text-sm border-b-2 border-gray-400 text-gray-500"
            to="/contacto"
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Login };
