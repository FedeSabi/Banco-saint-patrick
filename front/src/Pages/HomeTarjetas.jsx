import React from 'react';

const HomeTarjetas = () => {
    return (
        <div className='flex flex-col'>


            <div className='flex justify-center mt-[40px] '>
                <h1 className='font-custom font-normal text-[36px]'>¿ Con que tarjetas deseas operar hoy ?</h1>
            </div>



            <div className='h-[64vh] flex justify-around items-center'>


                <div >

                    <div>
                        <h6 className='font-custom font-normal text-[23px] mb-[10px]'>
                            Tarjeta 1
                        </h6>
                    </div>
                    <div >
                        <img src="/Tarjeta1.png" alt="" />
                    </div>

                    <div>
                        <form className='mt-[10px]' action="">
                            <label htmlFor="Saldo disponible" className='mt-[10px] font-custom font-normal'>Saldo disponible</label>
                            <input type="text"  id="fullName" className="form-input font-custom font-normal mt-[10px] w-full px-4 py-2 border rounded-lg text-customBlack" required placeholder="Saldo disponible" />
                        </form>
                    </div>
                </div>

                <div >
                    <div>
                        <h6 className='font-custom font-normal text-[23px] mb-[10px]'>
                            tarjeta 2
                        </h6>
                    </div>
                    <div >
                        <img src="/Tarjeta2.png" alt="" />
                    </div>

                    <div>
                        <form className='mt-[10px]' action="">
                        <label htmlFor="Saldo disponible" className='mt-[10px] font-custom font-normal'>Saldo disponible</label>
                            <input type="text"  id="fullName" className="form-input font-custom font-normal mt-[10px] w-full px-4 py-2 border rounded-lg text-gray-700 " required placeholder="Saldo disponible" />
                        </form>
                    </div>
                </div>




            </div>
            <div className='flex justify-center '>
                <button type="submit" className="w-[25vw] bg-customYellow font-custom font-normal text-black px-4 py-2 rounded-lg hover:bg-[#E1A000] focus:outline-none  focus:ring-opacity-50">Histotial de transaciones</button>
            </div>



        </div>
    )
}

export { HomeTarjetas }