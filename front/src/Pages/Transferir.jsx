import { useState } from 'react';
import tarjeta1 from "/tarjeta1.png";
import tarjeta2 from "/tarjeta2.png";
import logo from "/logo.png";
import chip from "/img_chip.jpg";
import '../index.css'
import { FcSignature } from "react-icons/fc";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Transferir = (nombre) => {
    const [tarjeta1Seleccionada, setTarjeta1Seleccionada] = useState(false);
    const [tarjeta2Seleccionada, setTarjeta2Seleccionada] = useState(false);
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    console.log(click);
    const [monto, setmMonto] = useState("");
    const [destinatario, setdestinatario] = useState("");
    const [mensaje, setMensaje] = useState(false);
    const [envioMensaje, setEnvioMensaje] = useState("");




    const EnvioFormulario = async (event) => {

        event.preventDefault()
        try {
            const respuesta = await axios.post('http://localhost:5000/Transferir', { monto: Number(monto), destinatario: Number(destinatario) });
            setLogin(respuesta.data.monto);

            setMensaje(true);
            setEnvioMensaje('sesion iniciada!!!');

            setNumeroTarjeta("");
            setPin("");

        } catch (error) {
            console.log('error al logearse', error)
        }
    }

    const handleTarjeta1Change = () => {
        setTarjeta1Seleccionada(!tarjeta1Seleccionada);
        if (tarjeta2Seleccionada) {
            setTarjeta2Seleccionada(false);
        }
    };

    const handleTarjeta2Change = () => {
        setTarjeta2Seleccionada(!tarjeta2Seleccionada);
        if (tarjeta1Seleccionada) {
            setTarjeta1Seleccionada(false);
        }
    };
    const handleCardClick = () => {
        console.log("Card clicked. Current click state:", click);
        setClick(!click);
    };
    const handleCardClick2 = () => {
        console.log("Card clicked. Current click state:", click2);
        setClick2(!click2);
    };




    return (
        <div className='bg-customBg '>


            <div class="bg-customBg  w-full min-h-[63vh]  sm:min-h-[63vh]  md:min-h-[54vh]   lg:min-h-[63vh] xl:min-h-[63vh]  flex justify-center items-center md:items-stretch">
                <div className="mt-[27px] bg-customBg flex justify-around w-full flex-wrap">
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
                        <div onClick={handleCardClick}>
                            {click ? (
                                <div className={`w-full h-[270px] sm:h-[280px] md:h-[425px] lg:h-[353px] xl:h-[400px]  2xl:h-[400px] rounded-[1.35rem] relative text-white shadow-2xl  ${click ? 'rotated-card' : ''}`}>
                                    <img className="relative object-cover w-full h-[280px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[424px] 2xl:w-[630px] rounded-[1.35rem]" src={tarjeta1} />
                                    <div className=" w-full  absolute top-1 h-[270px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[383px] flex flex-col justify-around">
                                        <div className="w-full">
                                            <div className=" sm:mt-5 bg-black h-10 sm:h-[2vh]  md:h-[5rem] lg:h-[5rem] xl:h-[5rem]  2xl:h-[3rem] 2xl:h-[5rem]"></div>
                                        </div>
                                        <div className='flex items-end justify-end'>

                                            <div className='bg-green-200 '>

                                                <p className={`text-black ${click2 ? 'rotated-card' : ''}`}>305</p>
                                            </div>

                                            <div className=' '>

                                                <div className="pt-1 bg-white mt-10 flex justify-start w-[365px] ">


                                                    <div className='flex justify-start  '>

                                                        <p class={`font-[200] text-[25px] text-black pr-5  ${click ? 'rotated-card' : ''}`}>
                                                            7000
                                                        </p>

                                                    </div>

                                                    <div className={`w-[154px] flex justify-start ${click ? 'rotated-card' : ''}`}>
                                                        <FcSignature size={36} />
                                                    </div>

                                                </div>


                                            </div>


                                        </div>
                                        <div className="flex justify-end">
                                            <h1 className={`pl-5 ${click ? 'rotated-card' : ''}`}>Firma autorizada</h1>
                                        </div>
                                        <div className="mt-10">
                                            <p className={`text-start pl-5 ${click ? 'rotated-card' : ''}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae repellat sed deleniti nihil similique, exercitationem numquam ducimus mollitia quibusdam delectus reprehenderit repellendus! Quisquam ad sapiente vel error exercitationem corrupti.</p>
                                        </div>
                                    </div>
                                </div>


                            ) : (
                                <div>

                                    <div class="w-full h-[270px] sm:h-[280px] md:h-[425px] lg:h-[353px] xl:h-[400px]  2xl:h-[400px] rounded-[1.35rem] relative text-white shadow-2xl ">

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
                                                    <p class="font-[200] tracking-more-wider w-full text-[39px] sm:text-[20px] md:text-[3.9rem] lg:text-[3.7rem] xl:text-[3.8rem] 2xl:text-[3rem]">
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



                                </div>



                            )

                            }
                        </div>
                        <form class=" mt-[2rem] sm:mt-[2rem] md:mt-[2rem] lg:mt-[4.5rem] xl:mt-[2.5rem] 2xl:mt-[3.5rem] mx-1" action="">
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
                        <div onClick={handleCardClick2}>
                            {click2 ? (
                               <div className={`w-full h-[270px] sm:h-[280px] md:h-[425px] lg:h-[353px] xl:h-[400px]  2xl:h-[400px] rounded-[1.35rem] relative text-white shadow-2xl  ${click2 ? 'rotated-card' : ''}`}>
                               <img className="relative object-cover w-full h-[280px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[424px] 2xl:w-[630px] rounded-[1.35rem]" src={tarjeta2} />
                               <div className=" w-full  absolute top-1 h-[270px] sm:h-[280px] md:h-[425px] lg:h-[400px] xl:h-[400px]  2xl:h-[383px] flex flex-col justify-around">
                                   <div className="w-full">
                                       <div className=" sm:mt-5 bg-black h-10 sm:h-[2vh]  md:h-[5rem] lg:h-[5rem] xl:h-[5rem]  2xl:h-[3rem] 2xl:h-[5rem]"></div>
                                   </div>

                                        <div className='flex items-end justify-end'>

                                            <div className='bg-green-200 '>

                                                <p className={`text-black ${click2 ? 'rotated-card' : ''}`}>305</p>
                                            </div>

                                            <div className=' '>

                                                <div className="pt-1 bg-white mt-10 flex justify-start w-[365px] ">


                                                    <div className='flex justify-start  '>

                                                        <p class={`font-[200] text-[25px] text-black pr-5  ${click2 ? 'rotated-card' : ''}`}>
                                                            7000
                                                        </p>

                                                    </div>

                                                    <div className={`w-[154px] flex justify-start ${click2 ? 'rotated-card' : ''}`}>
                                                        <FcSignature size={36} />
                                                    </div>

                                                </div>


                                            </div>


                                        </div>

                                        <div className='flex justify-end'>
                                            <h1 className={` pl-5 ${click2 ? 'rotated-card' : ''}`}>
                                                Firma autorizada
                                            </h1>
                                        </div>
                                        <div className='mt-10'>
                                            <p className={`text-start pl-5 ${click2 ? 'rotated-card' : ''}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae repellat sed deleniti nihil similique, exercitationem numquam ducimus mollitia quibusdam delectus reprehenderit repellendus! Quisquam ad sapiente vel error exercitationem corrupti.</p>
                                        </div>

                                    </div>






                                </div>

                            ) : (
                                <div class="w-full h-[270px] sm:h-[280px] md:h-[425px] lg:h-[353px] xl:h-[400px]  2xl:h-[400px] rounded-[1.35rem] relative text-white shadow-2xl ">

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
                                                <p class="font-[200] tracking-more-wider w-full text-[39px] sm:text-[20px] md:text-[3.9rem] lg:text-[3.7rem] xl:text-[3.8rem] 2xl:text-[3rem]">
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


                            )

                            }
                        </div>

                        <form class=" mt-[2rem] sm:mt-[2rem] md:mt-[2rem] lg:mt-[4.5rem] xl:mt-[2.5rem] 2xl:mt-[3.5rem] mx-1" action="">
                            <label for="saldoDisponible" class="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl mt-10 font-custom font-medium">Saldo disponible</label>

                            <input type="text" id="saldoDisponible" class="form-input  font-semibold mt-4  h-[75px] w-full px-4 py-2 border-[0.5px] border-[#695959] rounded-[1rem] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl bg-customBg " value='$-1.500.000' readOnly placeholder="Saldo disponible" />
                        </form>
                    </div>






                </div>

            </div>


            <div className='mt-10 h-[35vh] flex flex-col justify-start items-center'>
                <form onSubmit={EnvioFormulario} className='w-[40vw]'>
                    <div className="mb-4">
                        <input type="numero" onChange={(e) => setNumeroTarjeta(e.target.value)} id="numero" className=" form-input w-full h-[53px] bg-customGray px-4 py-2 border rounded-[1rem] font-custom text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl focus:ring-yellows-500" required placeholder="Monto" />
                    </div>
                    <div className="mb-6">
                        <input type="numero" onChange={(e) => setPin(e.target.value)} id="pin" className=" form-input w-full h-[53px] bg-customGray px-4 py-2 border rounded-[1rem] font-custom text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl  focus:ring-yellows-500" required placeholder="Destinatario" />
                    </div>
                    {tarjeta1Seleccionada ? (
                        <Link to={'/transfTarjeta1'}>
                            <button type="submit" className="w-full h-[53px] bg-customGray font-medium  font-custom text-gray-400 px-4 py-2 rounded-[1rem] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-custom hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-yellows-500 focus:ring-opacity-50">Transferir</button>
                        </Link >
                    ) : tarjeta2Seleccionada ? (
                        <Link to={'/transfTarjeta2'}>
                            <button type="submit" className="w-full h-[53px] bg-customGray font-medium font-custom text-gray-400 px-4 py-2 rounded-[1rem] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-custom hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-yellows-500 focus:ring-opacity-50">Transferir</button>
                        </Link >
                    ) : null}
                </form>


            </div>

        </div>
    );
};

export { Transferir };
