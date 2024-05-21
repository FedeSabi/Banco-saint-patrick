import { useState } from 'react';
import tarjeta1 from '/tarjeta1.png'
import tarjeta2 from '/tarjeta2.png'
import logo from "/logo.png"
import chip from "/img_chip.jpg"
import { Link } from 'react-router-dom';


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
            <div className=' flex justify-center items-end h-20'>
                <h1 className='font-custom font-normal text-center text-base sm:text-lg md:text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl  '>
                    ¿Con qué tarjeta deseas operar hoy?
                </h1>

            </div>

            <div class="bg-customBg  w-full min-h-[63vh] mt-[30px] sm:min-h-[63vh] sm:mt-[9%] md:min-h-[54vh] md:mt-[9%]  lg:min-h-[63vh] xl:min-h-[63vh] xl:mt-[2rem] flex justify-center items-center md:items-stretch">



                <div class=" flex justify-around w-full flex-wrap bg-customBg ">
                    <div>
                        <div className="flex items-center mb-5">
                            <input
                                type="checkbox"
                                id="tarjeta1"
                                checked={tarjeta1Seleccionada}
                                onChange={handleTarjeta1Change}
                                className="rounded-full appearance-none w-7 h-7 border-2 border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none"
                            />
                            <label htmlFor="tarjeta1" className="ml-2 text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl  font-custom font-normal">
                                Tarjeta 1
                            </label>
                        </div>
                        <div class="w-full h-[270px] sm:h-[280px] md:h-[425px] lg:h-[353px] xl:h-[400px]  2xl:h-[400px] rounded-[1.35rem] relative text-white shadow-2xl transition-transform transform hover:scale-110">

                            <img class="relative object-cover w-full h-[280px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[424px] 2xl:w-[630px] rounded-[1.35rem]" src={tarjeta1} />

                            <div class="w-full px-8 absolute top-1 h-[270px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[383px] flex flex-col justify-around">

                                <div class="flex justify-between">
                                    <h1 class="mt-5 text-base sm:text-lg md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-serif font-semibold">Saint Patrick</h1>
                                    <img class="mt-5 w-10 h-15 sm:w-[2rem] sm:h-[4rem] md:w-[6rem] md:h-[8rem] lg:w-24 lg:h-[8rem] xl:w-24 xl:h-[8rem] 2xl:w-24 2xl:h-[8rem]" src={logo} />
                                </div>
                                <div class="pt-1">
                                    <div class="w-[96px] ">
                                        <img class="w-10 h-15 sm:w-[2rem] sm:h-[2rem] md:w-[3rem] md:h-[3rem] lg:w-[2.5rem] lg:h-[2.5rem] xl:w-[2.5rem] xl:h-[2.5rem] 2xl:w-12 2xl:h-[3rem]" src={chip} alt="" />
                                    </div>
                                    <div class="flex justify-center">
                                        <p class="font-[200] tracking-more-wider w-full text-[35px] sm:text-[20px] md:text-[3.9rem] lg:text-[3.7rem] xl:text-[3.8rem] 2xl:text-[3.8rem]">
                                            4642 3489 9867 7632
                                        </p>
                                    </div>
                                </div>

                                <div class="flex justify-end">
                                    <div class="flex justify-around w-[270px]">
                                        <div class="flex">
                                            <div class="font-[500] text-md">
                                                <p class="mr-3 text-black">Valid</p>
                                                <p class="text-black">from</p>
                                            </div>
                                            <p class="font-normal tracking-wider text-2xl">11/15</p>
                                        </div>
                                        <div class="flex">
                                            <div class="font-[500] text-md">
                                                <p class="mr-3 text-black">Good</p>
                                                <p class="text-black">thru</p>
                                            </div>
                                            <p class="font-normal tracking-wider text-2xl">03/25</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between xl:mb-10 md:mb-10">
                                    <h1 class="text-[20px] sm:text-[28px] md:text-[30px] lg:text[33px] xl:text-[33px] 2xl:text-[35px] font-serif font-semibold">{nombre.login}</h1>
                                    <p class="flex items-end">1425</p>
                                </div>
                            </div>
                        </div>
                        <form class=" my-[2rem] sm:my-[2rem] md:my-[2rem] lg:my-[4.5rem] xl:my-[2.5rem] 2xl:my-[3.5rem] mx-1" action="">
                        <label for="saldoDisponible" class="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl mt-10 font-custom font-medium">Saldo disponible</label>

                            <input type="text" id="saldoDisponible" class="form-input  font-semibold mt-4  h-[75px] w-full px-4 py-2 border-[0.5px] border-[#695959] rounded-[1rem] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl bg-customBg " value='$-1.500.000' readOnly placeholder="Saldo disponible" />
                        </form>



                    </div>
                    <div>
                        <div className="flex items-center mb-5">
                            <input
                                type="checkbox"
                                id="tarjeta1"
                                checked={tarjeta2Seleccionada}
                                onChange={handleTarjeta2Change}
                                className="rounded-full appearance-none w-7 h-7 border-2 border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none"
                            />
                            <label htmlFor="tarjeta1" className="ml-2 text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl  font-custom font-normal">
                                Tarjeta 2
                            </label>
                        </div>
                        <div class="w-full h-[270px] sm:h-[280px] md:h-[425px] lg:h-[353px] xl:h-[400px]  2xl:h-[400px] rounded-[1.35rem] relative text-white shadow-2xl transition-transform transform hover:scale-110">

                            <img class="relative object-cover w-full h-[280px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[424px] 2xl:w-[630px] rounded-[1.35rem]" src={tarjeta2} />

                            <div class="w-full px-8 absolute top-1 h-[270px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[383px] flex flex-col justify-around">

                                <div class="flex justify-between">
                                    <h1 class="mt-5 text-base sm:text-lg md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-serif font-semibold">Saint Patrick</h1>
                                    <img class="mt-5 w-10 h-15 sm:w-[2rem] sm:h-[4rem] md:w-[6rem] md:h-[8rem] lg:w-24 lg:h-[8rem] xl:w-24 xl:h-[8rem] 2xl:w-24 2xl:h-[8rem]" src={logo} />
                                </div>
                                <div class="pt-1">
                                    <div class="w-[96px] ">
                                        <img class="w-10 h-15 sm:w-[2rem] sm:h-[2rem] md:w-[3rem] md:h-[3rem] lg:w-[2.5rem] lg:h-[2.5rem] xl:w-[2.5rem] xl:h-[2.5rem] 2xl:w-12 2xl:h-[3rem]" src={chip} alt="" />
                                    </div>
                                    <div class="flex justify-center">
                                        <p class="font-[200] tracking-more-wider w-full text-[35px] sm:text-[20px] md:text-[3.9rem] lg:text-[3.7rem] xl:text-[3.8rem] 2xl:text-[3.8rem]">
                                            4642 3489 9867 7632
                                        </p>
                                    </div>
                                </div>

                                <div class="flex justify-end">
                                    <div class="flex justify-around w-[270px]">
                                        <div class="flex">
                                            <div class="font-[500] text-md">
                                                <p class="mr-3 text-black">Valid</p>
                                                <p class="text-black">from</p>
                                            </div>
                                            <p class="font-normal tracking-wider text-2xl">11/15</p>
                                        </div>
                                        <div class="flex">
                                            <div class="font-[500] text-md">
                                                <p class="mr-3 text-black">Good</p>
                                                <p class="text-black">thru</p>
                                            </div>
                                            <p class="font-normal tracking-wider text-2xl">03/25</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between xl:mb-10 md:mb-10">
                                    <h1 class="text-[20px] sm:text-[28px] md:text-[30px] lg:text[33px] xl:text-[33px] 2xl:text-[35px] font-serif font-semibold">{nombre.login}</h1>
                                    <p class="flex items-end">1425</p>
                                </div>
                            </div>
                        </div>
                        <form class=" my-[2rem] sm:my-[2rem] md:my-[2rem] lg:my-[4.5rem] xl:my-[2.5rem] 2xl:my-[3.5rem] mx-1" action="">
                        <label for="saldoDisponible" class="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl mt-10 font-custom font-medium">Saldo disponible</label>

                            <input type="text" id="saldoDisponible" class="form-input  font-semibold mt-4  h-[75px] w-full px-4 py-2 border-[0.5px] border-[#695959] rounded-[1rem] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl bg-customBg " value='$-1.500.000' readOnly placeholder="Saldo disponible" />
                        </form>



                    </div>

                </div>


            </div>

            <div className='flex justify-center items-center sm:h-[28px] md:h-[250px] lg:h[33px] xl:h-[63px] 2xl:h-[109px]'>
                <Link to={'/historial'}>
                    <button type="submit" class="w-full w-[300px] sm:w-[500px] 2xl:w-[564px] bg-customYellow font-custom font-simibold text-black text-xl sm:text-1xl px-4 py-2 rounded-lg hover:bg-[#E1A000] focus:outline-none  focus:ring-opacity-50">Histotial de transaciones</button>
                </Link>
            </div>

        </div>

    )
}

export { HomeTarjetas }



