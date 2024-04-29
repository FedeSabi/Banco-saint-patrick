import React from 'react';
import { Link } from 'react-router-dom';
import grafica_1 from '/grafica_1.png';
import grafica_2 from '/grafica_2.png';
import grafica_3 from '/grafica_3.png'

const FlujosMovimientos = () => {
    return (
        <div className='h-[86vh] flex flex-col justify-around bg-customBg'>
            <div className='flex justify-center items-center h-20 '>
                <h1 className='font-custom font-normal text-center text-2xl sm:text-3xl'>
                    Flujo de Transacciones
                </h1 >
            </div>
            <div className='flex justify-center flex-wrap'>
                <div className='h-[57vh] flex justify-center items-center '>
                    <div className='h-[100%] w-[70%] border flex flex-col items-center justify-between rounded-lg'>
                        <div>
                            <h3 className='mt-5 font-custom font-normal text-center text-2xl sm:text-2xl'>
                                Noviembre 2023
                            </h3>
                        </div>

                        <img src={grafica_1} alt="" />
                        <div className='flex justify-around w-full bg-customGreen rounded-lg'>
                            <div className=' flex flex-col items-center border-r p-2'>
                                <h5 className='text-white'>
                                    Desde
                                </h5>
                                <p className='text-white'>
                                    miercoles 21/2/2023
                                </p>
                                <p className='text-white'>22:03</p>
                            </div>

                            <div className='flex p-2 '>
                                <div className='flex flex-col items-center '>
                                    <h5 className='text-white'>
                                        Hasta
                                    </h5>
                                    <p className='text-white'>
                                        jueves 22/2/2023
                                    </p>
                                    <p className='text-white'>21:03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='h-[57vh] flex justify-center items-center '>
                    <div className='h-[100%] w-[70%] border flex flex-col items-center justify-between rounded-lg'>
                        <div>
                            <h3 className='mt-5 font-custom font-normal text-center text-2xl sm:text-2xl'>
                                Diciembre 2023
                            </h3>
                        </div>

                        <img src={grafica_2} alt="" />
                        <div className='flex justify-around w-full bg-customGreen rounded-lg'>
                            <div className=' flex flex-col items-center border-r p-2'>
                                <h5 className='text-white'>
                                    Desde
                                </h5>
                                <p className='text-white'>
                                    miercoles 21/2/2023
                                </p>
                                <p className='text-white'>22:03</p>
                            </div>

                            <div className='flex p-2 '>
                                <div className='flex flex-col items-center '>
                                    <h5 className='text-white'>
                                        Hasta
                                    </h5>
                                    <p className='text-white'>
                                        jueves 22/2/2023
                                    </p>
                                    <p className='text-white'>21:03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='h-[57vh] flex justify-center items-center '>
                    <div className='h-[100%] w-[70%] border flex flex-col items-center justify-between rounded-lg'>
                        <div>
                            <h3 className='mt-5 font-custom font-normal text-center text-2xl sm:text-2xl'>
                                Enero 2024
                            </h3>
                        </div>

                        <img src={grafica_3} alt="" />
                        <div className='flex justify-around w-full bg-customGreen rounded-lg'>
                            <div className=' flex flex-col items-center border-r p-2'>
                                <h5 className='text-white'>
                                    Desde
                                </h5>
                                <p className='text-white'>
                                    miercoles 21/2/2023
                                </p>
                                <p className='text-white'>22:03</p>
                            </div>

                            <div className='flex p-2 '>
                                <div className='flex flex-col items-center '>
                                    <h5 className='text-white'>
                                        Hasta
                                    </h5>
                                    <p className='text-white'>
                                        jueves 22/2/2023
                                    </p>
                                    <p className='text-white'>21:03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Link to={'/historial'}>
                <div className='flex justify-center items-center h-20'>
                    <button type="submit" className="w-[25vw] bg-customYellow font-custom font-simibold text-black text-xl sm:text-1xl px-4 py-2 rounded-lg hover:bg-[#E1A000] focus:outline-none  focus:ring-opacity-50">Volver atrás</button>
                </div>

            </Link>

        </div >
    )
}

export { FlujosMovimientos }