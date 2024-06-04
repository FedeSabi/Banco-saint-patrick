import React from 'react';
import Vector from '/Vector.png';
import { Link } from 'react-router-dom';

const TransfRealizada = (onLogout) => {
  return (
    <div className="flex min-h-screen bg-customGreen">
      <div className="mx-auto">
        <h1 className="mt-20 max-w-screen-sm text-center text-3xl sm:text-5xl md:text-4xl font-custom font-thin text-customYellow">
          ¡Transferencia realizada con éxito!
        </h1>
        <div className="mx-auto mb-12 sm:mb-20 mt-10 sm:mt-24 h-24 sm:h-40 w-24 sm:w-40 overflow-hidden">
          <img src={Vector} alt="" />
        </div>
        <p className="max-w-screen-sm text-center text-lg sm:text-xl md:text-3xl font-custom font-thin text-white mb-4 sm:mb-8">
          Monto: $1400
        </p>
        <p className="mx-auto mb-4 sm:mb-8 text-lg sm:text-xl md:text-3xl font-custom font-thin text-white text-center max-w-lg">
          Cuenta destino: 4436-6987-2554-3322
        </p>
        <p className="mx-auto mb-12 sm:mb-32 text-lg sm:text-xl md:text-3xl font-custom font-thin text-white text-center max-w-lg">
          Fecha: 19 de Enero del 2024
        </p>
        <div className="flex flex-col items-center">
          
          <Link to={'/transferir'} className="text-customGrayTranf text-center mb-10 w-full font-custom inline-block px-8 sm:px-12 py-2  bg-customGray rounded-xl font-medium text-lg sm:text-xl md:text-2xl hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:text-customBlack hover:font-semibold">
            Realizar otra transferencia
          </Link>
          <Link onClick={onLogout}  to={'/iniciarSesion'} className="text-center w-full mb-[10px] text-customGrayTranf inline-block  py-2  bg-customGray border-2 rounded-xl font-medium text-lg sm:text-xl md:text-2xl hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:text-customBlack hover:font-semibold">
            
            Salir
          </Link>

        </div>
      </div>
    </div>
  );
};

export { TransfRealizada };

