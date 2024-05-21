

import { Link } from "react-router-dom";
import candado from '/candado.png'


const IniciarSesion = () => {






    return (
        <div className="bg-customBg h-[100vh]">
            <div className='w-full h-[42vh] flex justify-center'>
                <img className='"w-full h-auto" mt-10 md:mt-12 lg:mt-14 xl:mt-16' src="/image.png" alt="" />
            </div>


            <div className='flex justify-center'>
                <h1 className='text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-serif font-semibold'>Saint Patrick</h1>
            </div>
            <div className='flex justify-center mt-[3%]'>

                <img src={candado} alt="" />
            </div>
            <div className='flex justify-center items-end h-[80px]  mt-[7px]'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-custom font-normal ml-[10px] mr-[10px]'>
                    Se ha cerrado sesión
                </h1>

            </div>
            <div className='flex justify-center items-end h-[80px]  mt-[41px]'>
                <h1 className='text-2xl md:text-3xl lg:text-3xl  font-custom font-normal ml-[10px] mr-[10px]'>
                    Para ingresar nuevamente inicie sesión nuevamente
                </h1>

            </div>

            <div className=" flex items-center justify-center h-[12vh] mt-[42px]">
                <div className="bg-white  rounded-lg  max-w-[37rem] w-full ml-[10px] mr-[10px]">


                    <button type="submit" className="w-full bg-customGray text-customBlack font-bold text-2xl md:text-3xl  px-4 py-2 rounded-lg hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Iniciar sesión</button>



                </div>
            </div>


        </div>



    )
}

export { IniciarSesion }