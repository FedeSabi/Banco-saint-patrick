import React from 'react';
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Historial = () => {
    return (

        <div className='flex flex-col justify-around items-center h-[86vh] bg-customBg '>
            <div className='flex justify-center items-center h-20'>
            <h1 className='font-custom font-normal text-center text-2xl sm:text-3xl '>Historial de Transacciones</h1>
            </div>
    
            <div className="w-[58vw] border-t  border-black p-4 ">

                <div className='flex justify around'>
                    <div className='w-full'>
                        <p className='font-custom font-normal  text-2xl  '>
                            17 de enero 2024
                        </p>
                        <p className='font-custom font-normal  text-2xl '>
                            Varios
                        </p>

                    </div>
                    <div className='w-20 '> <RiArrowUpSLine size={30} color='green'/> </div>
                    <div>

                        <p className='font-custom font-normal  text-2xl '>
                    Recibida
                        </p>
                        <p className='font-custom font-normal  text-2xl '>
                            $400
                        </p>

                    </div>
                </div>
            </div>

            {/*ejemplo 2 */}
            <div className="w-[58vw] border-t  border-black p-4">

                <div className='flex justify around'>
                    <div className='w-full'>
                        <p className='font-custom font-normal  text-2xl'>
                            17 de enero 2024
                        </p>
                        <p className='font-custom font-normal  text-2xl'>
                            Varios
                        </p>

                    </div>

                    <div className='w-20 '> <RiArrowUpSLine size={30} color='red'/> </div>
                    <div>
                        <p className='font-custom font-normal  text-2xl'>
                            Recibida
                        </p>
                        <p className='font-custom font-normal  text-2xl'>
                            $400
                        </p>

                    </div>
                </div>

            </div>


            {/*ejemplo 3 */}
            <div className="w-[58vw] border-t  border-black p-4">

                <div className='flex justify around'>
                    <div className='w-full'>
                        <p className='font-custom font-normal  text-2xl'>
                            17 de enero 2024
                        </p>
                        <p className='font-custom font-normal  text-2xl'>
                            Varios
                        </p>

                    </div>
                    <div className='w-20 '> <RiArrowUpSLine size={30} color='green'/> </div>
                    <div>
                        <p className='font-custom font-normal  text-2xl'>
                            Recibida
                        </p>
                        <p className='font-custom font-normal  text-2xl'>
                            $400
                        </p>

                    </div>
                </div>
            </div>

            {/*ejemplo 4 */}
            <div className="w-[58vw] border-t  border-black p-4">

                <div className='flex justify around'>
                    <div className='w-full'>
                        <p className='font-custom font-normal  text-2xl'>
                            17 de enero 2024
                        </p>
                        <p className='font-custom font-normal  text-2xl'>
                            Varios
                        </p>

                    </div>
                    <div className='w-20 '> <RiArrowUpSLine size={30} color='red'/> </div>
                    <div>
                        <p className='font-custom font-normal  text-2xl'>
                            Recibida
                        </p>
                        <p className='font-custom font-normal  text-2xl'>
                            $400
                        </p>

                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center h-20'>
                <button type="submit" className="w-[25vw] bg-customYellow font-custom font-simibold text-black text-xl sm:text-1xl px-4 py-2 rounded-lg hover:bg-[#E1A000] focus:outline-none  focus:ring-opacity-50">Nueva Transacción</button>
            </div>
            <Link to={'/flujos-movimientos'}>
            <div className='flex justify-center items-center h-20'>
                <button type="submit" className="w-[25vw] bg-customYellow font-custom font-simibold text-black text-xl sm:text-1xl px-4 py-2 rounded-lg hover:bg-[#E1A000] focus:outline-none  focus:ring-opacity-50">Flujos de movimientos</button>
            </div>
            
            </Link>
            
        </div>

    )
}

export { Historial }