import React, { useState } from 'react';
import tarjeta1 from "/tarjeta1.png"
import tarjeta2 from "/tarjeta2.png"
import logo from "/logo.png"
import chip from "/img_chip.jpg"


const HomeTarjetas = (nombre) => {
    const [tarjeta1Seleccionada, setTarjeta1Seleccionada] = useState(false);
    const [tarjeta2Seleccionada, setTarjeta2Seleccionada] = useState(false);

    const handleTarjeta1Change = (e) => {
        setTarjeta1Seleccionada(e.target.checked);
        if (e.target.checked) {
            setTarjeta2Seleccionada(false);
        }
    };

    const handleTarjeta2Change = (e) => {
        setTarjeta2Seleccionada(e.target.checked);
        if (e.target.checked) {
            setTarjeta1Seleccionada(false);
        }
    };
    return (
        <div className='bg-customBg '>
            <div className='flex justify-center items-end h-20'>
                <h1 className='font-custom font-normal text-center text-2xl sm:text-3xl md:text-4xl  '>
                    ¿Con qué tarjeta deseas operar hoy?
                </h1>

            </div>

            <div class="bg-customBg  w-full min-h-[63vh] flex justify-center items-center ">


                <div class=" flex justify-around w-full flex-wrap bg-customBg ">
                <div>
                        <div className="flex items-center mb-5">
                            <input
                                type="checkbox"
                                id="tarjeta1"
                                checked={tarjeta1Seleccionada}
                                onChange={handleTarjeta1Change}
                                className="rounded-full appearance-none w-6 h-6 border-2 border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none"
                            />
                            <label htmlFor="tarjeta1" className="ml-2 text-black text-xl sm:text-2xl  font-custom font-semibold">
                                Tarjeta 1
                            </label>
                        </div>
                        <div class="w-[600px] h-[400px]  rounded-[1.35rem] relative text-white shadow-2xl transition-transform transform hover:scale-110">

                            <img class="relative object-cover w-full h-full rounded-[1.35rem]" src={tarjeta1} />

                            <div class="w-full px-8 absolute top-1 h-[38vh] flex flex-col justify-around">

                                <div class="flex justify-between">
                                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-serif font-semibold'>Saint Patrick</h1>
                                    <img class="w-24 h-34" src={logo} />
                                </div>
                                <div class="pt-1">
                                    <div className='w-[96px] flex justify-center'>
                                        <img className='w-10 ' src={chip} alt="" />
                                    </div>
                                    <div className='flex justify-center text-[53px]'>
                                        <p class="font-[200] tracking-more-wider">
                                            4642  3489  9867  7632
                                        </p>

                                    </div>
                                </div>

                                <div class=" pr-6 flex justify-end">


                                    <div class="flex justify-around ">
                                        <div class="flex">
                                            <div class="font-[500] text-xs">
                                                <p className='mr-3 text-black'>
                                                    Valid
                                                </p>
                                                <p className='text-black'>
                                                    from
                                                </p>
                                            </div>
                                            <p class="font-medium tracking-wider text-sm">
                                                11/15
                                            </p>
                                        </div>
                                        <div class="flex">
                                            <div class="font-[500] text-xs text-xs">
                                                <p className='mr-3 text-black'>
                                                    Good
                                                </p>
                                                <p className='text-black'>
                                                    thru
                                                </p>


                                            </div>
                                            <p class="font-medium tracking-wider text-sm">
                                                03/25
                                            </p>

                                        </div>


                                    </div>

                                </div>
                                <div class="flex justify-between">

                                    <h1 class='text-2xl  font-serif font-semibold'>
                                        {nombre.login}
                                    </h1>
                                    <p className='flex items-end'>
                                        1425
                                    </p>
                                </div>

                            </div>
                            <form className='mt-[10px]' action="">
                                <label htmlFor="saldoDisponible" className='text-black text-xl sm:text-2xl  mt-10 font-semibold'>Saldo disponible</label>
                                <input
                                    type="text" 
                                    id="saldoDisponible"
                                    className="form-input font-semibold mt-4 w-full px-4 py-2 border rounded-lg text-black bg-customBg "
                                    value='' 
                                    readOnly 
                                    placeholder="Saldo disponible"
                                />
                            </form>

                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-5">
                            <input
                                type="checkbox"
                                id="tarjeta2"
                                checked={tarjeta2Seleccionada}
                                onChange={handleTarjeta2Change}
                                className="rounded-full appearance-none w-6 h-6 border-2 border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none"
                            />
                            <label htmlFor="tarjeta2" className="ml-2 text-black text-xl sm:text-2xl  font-custom font-semibold">
                                Tarjeta 2
                            </label>
                        </div>
                        <div class="w-[600px] h-[400px]   rounded-[1.35rem] relative text-white shadow-2xl transition-transform transform hover:scale-110">

                            <img class="relative object-cover w-full h-full rounded-[1.35rem]" src={tarjeta2} />

                            <div class="w-full px-8 absolute top-1 h-[38vh] flex flex-col justify-around">

                                <div class="flex justify-between">
                                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-serif font-semibold'>Saint Patrick</h1>
                                    <img class="w-24 h-34" src={logo} />
                                </div>
                                <div class="pt-1">
                                    <div className='w-[96px] flex justify-center'>
                                        <img className='w-10 ' src={chip} alt="" />
                                    </div>
                                    <div className='flex justify-center text-[53px]'>
                                        <p class="font-[200] tracking-more-wider">
                                            4642  3489  9867  7632
                                        </p>

                                    </div>
                                </div>

                                <div class=" pr-6 flex justify-end">


                                    <div class="flex justify-around ">
                                        <div class="flex">
                                            <div class="font-[500] text-xs">
                                                <p className='mr-3 text-black'>
                                                    Valid
                                                </p>
                                                <p className='text-black'>
                                                    from
                                                </p>
                                            </div>
                                            <p class="font-medium tracking-wider text-sm">
                                                11/15
                                            </p>
                                        </div>
                                        <div class="flex">
                                            <div class="font-[500] text-xs text-xs">
                                                <p className='mr-3 text-black'>
                                                    Good
                                                </p>
                                                <p className='text-black'>
                                                    thru
                                                </p>


                                            </div>
                                            <p class="font-medium tracking-wider text-sm">
                                                03/25
                                            </p>

                                        </div>


                                    </div>

                                </div>
                                <div class="flex justify-between">

                                    <h1 class='text-2xl  font-serif font-semibold'>
                                        {nombre.login}
                                    </h1>
                                    <p className='flex items-end'>
                                        1425
                                    </p>
                                </div>

                            </div>
                            <form className='mt-[10px]' action="">
                                <label htmlFor="saldoDisponible" className='text-black text-xl sm:text-2xl mt-10 font-semibold'>Saldo disponible</label>
                                <input
                                    type="text" 
                                    id="saldoDisponible"
                                    className="form-input font-semibold mt-4 w-full px-4 py-2 border rounded-lg text-black bg-customBg "
                                    value='' 
                                    readOnly 
                                    placeholder="Saldo disponible"
                                />
                            </form>

                        </div>
                    </div>

                </div>


            </div>

            <div className='flex justify-center items-center h-[11rem]'>
                <button type="submit" className="w-[25vw] bg-customYellow font-custom font-simibold text-black text-xl sm:text-1xl px-4 py-2 rounded-lg hover:bg-[#E1A000] focus:outline-none  focus:ring-opacity-50">Histotial de transaciones</button>
            </div>

        </div>

    )
}

export { HomeTarjetas }


/*

  <div class="">
                                        <p class="font-light text-xs">
                                            CVV
                                        </p>
                                        <p class="font-bold tracking-more-wider text-sm">
                                            ···
                                        </p>
                                    </div>
 <div>
                        <form className='mt-[10px]' action="">
                            <label htmlFor="Saldo disponible" className='mt-[10px] font-custom font-normal'>Saldo disponible</label>
                            <input type="text"  id="fullName" className="form-input font-custom font-normal mt-[10px] w-full px-4 py-2 border rounded-lg text-customBlack" required placeholder="Saldo disponible" />
                        </form>
                    </div>



                    <div>
                        <form className='mt-[10px]' action="">
                        <label htmlFor="Saldo disponible" className='mt-[10px] font-custom font-normal'>Saldo disponible</label>
                            <input type="text"  id="fullName" className="form-input font-custom font-normal mt-[10px] w-full px-4 py-2 border rounded-lg text-gray-700 " required placeholder="Saldo disponible" />
                        </form>
                    </div>
 <div className='flex justify-center '>
                <button type="submit" className="w-[25vw] bg-customYellow font-custom font-normal text-black px-4 py-2 rounded-lg hover:bg-[#E1A000] focus:outline-none  focus:ring-opacity-50">Histotial de transaciones</button>
            </div>

*/
