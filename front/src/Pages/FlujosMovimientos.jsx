
import { Link } from 'react-router-dom';


const FlujosMovimientos = () => {
    return (
        <div className=' flex flex-col justify-around bg-customBg'>
            <div className='flex justify-center items-center h-20 '>
                <h1 className='font-custom font-normal text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
                    Flujo de Transacciones
                </h1 >
            </div>
            <div className='flex justify-center flex-wrap'>
                <div className='h-[57vh] mb-[22px] flex justify-center items-center '>
                    <div className='h-[100%] w-[70%] border flex flex-col items-center justify-between rounded-lg'>
                        <div>
                            <h3 className='mt-5 font-custom font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
                                Noviembre 2023
                            </h3>
                        </div>

                        <img src='/grafica_1.png' alt="" />
                        <div className='flex justify-around w-full bg-customGreen rounded-lg'>
                            <div className=' flex flex-col items-center border-r p-2'>
                                <h5 className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl'>
                                    Desde
                                </h5>
                                <p className='text-white text-xs sm:text-sm md:text-base '>
                                    miercoles 21/2/2023
                                </p>
                                <p className='text-white text-xs sm:text-sm md:text-base'>22:03</p>
                            </div>

                            <div className='flex p-2 '>
                                <div className='flex flex-col items-center '>
                                    <h5 className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl'>
                                        Hasta
                                    </h5>
                                    <p className='text-white text-xs sm:text-sm md:text-base '>
                                        jueves 22/2/2023
                                    </p>
                                    <p className='text-white text-xs sm:text-sm md:text-base'>21:03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='h-[57vh] mb-[22px]  flex justify-center items-center '>
                    <div className='h-[100%] w-[70%] border flex flex-col items-center justify-between rounded-lg'>
                        <div>
                            <h3 className='mt-5 font-custom font-normal text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl'>
                                Diciembre 2023
                            </h3>
                        </div>

                        <img src='/grafica_2.png' alt="" />
                        <div className='flex justify-around w-full bg-customGreen rounded-lg'>
                            <div className=' flex flex-col items-center border-r p-2'>
                                <h5 className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl'>
                                    Desde
                                </h5>
                                <p className='text-white text-xs sm:text-sm md:text-base '>
                                    miercoles 21/2/2023
                                </p>
                                <p className='text-white text-xs sm:text-sm md:text-base '>22:03</p>
                            </div>

                            <div className='flex p-2 '>
                                <div className='flex flex-col items-center '>
                                    <h5 className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl'>
                                        Hasta
                                    </h5>
                                    <p className='text-white text-xs sm:text-sm md:text-base '>
                                        jueves 22/2/2023
                                    </p>
                                    <p className='text-white text-xs sm:text-sm md:text-base '>21:03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='h-[57vh] mb-[22px]  flex justify-center items-center '>
                    <div className='h-[100%] w-[70%] border flex flex-col items-center justify-between rounded-lg'>
                        <div>
                            <h3 className='mt-5 font-custom font-normal text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
                                Enero 2024
                            </h3>
                        </div>

                        <img src='/grafica_3.png' alt="" />
                        <div className='flex justify-around w-full bg-customGreen rounded-lg'>
                            <div className=' flex flex-col items-center border-r p-2'>
                                <h5 className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl '>
                                    Desde
                                </h5>
                                <p className='text-white text-xs sm:text-sm md:text-base  '>
                                    miercoles 21/2/2023
                                </p>
                                <p className='text-white text-xs sm:text-sm md:text-base  '>22:03</p>
                            </div>

                            <div className='flex p-2 '>
                                <div className='flex flex-col items-center '>
                                    <h5 className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl'>
                                        Hasta
                                    </h5>
                                    <p className='text-white text-xs sm:text-sm md:text-base '>
                                        jueves 22/2/2023
                                    </p>
                                    <p className='text-white text-xs sm:text-sm md:text-base '>21:03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Link to={'/historial'}>
                <div className='flex justify-center items-center h-[9rem]'>
                    <button type="submit" className="sm:w-[20%] md:[20%] bg-customYellow font-custom font-simibold text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 1xl:text-2xl px-4 py-2 rounded-lg hover:bg-[#E1A000] focus:outline-none  focus:ring-opacity-50">Volver atrás</button>
                </div>

            </Link>

        </div >
    )
}

export { FlujosMovimientos }