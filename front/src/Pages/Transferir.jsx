import { useState } from 'react';
import tarjeta1 from './../../public/Tarjeta1.png'
import tarjeta2 from './../../public/Tarjeta2.png'
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
    const [monto, setMonto] = useState("");
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


            <div className="bg-customBg  w-full min-h-[52vh] flex justify-center items-center ">
                <div className="mt-[57px] bg-customBg flex justify-around w-full flex-wrap">
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
                        <div onClick={handleCardClick}>
                            {click ? (
                                <div className={`w-[600px] h-[400px] rounded-[1.35rem] relative text-white shadow-2xl ${click ? 'rotated-card' : ''}`}>
                                    <img class="relative object-cover w-full h-full rounded-[1.35rem]" src={tarjeta1} />
                                    <div class={'  absolute top-10 h-[34vh] flex flex-col  '}>
                                        <div className='w-[599px]'>


                                            <div class="pt-1 bg-black h-[5rem] ">


                                            </div>
                                        </div>

                                        <div className='flex items-end justify-end'>

                                            <div className='bg-green-200 '>

                                                <p className={`text-black ${click ? 'rotated-card' : ''}`}>255</p>
                                            </div>

                                            <div className='w-[20vw] '>

                                                <div className="pt-1 bg-white mt-10 flex justify-start w-[365px] ">


                                                    <div className='flex justify-start  '>

                                                        <p class={`font-[200] text-[25px] text-black pr-5  ${click ? 'rotated-card' : ''}`}>
                                                            8252
                                                        </p>

                                                    </div>

                                                    <div className={`w-[154px] flex justify-start ${click ? 'rotated-card' : ''}`}>
                                                        <FcSignature size={36} />
                                                    </div>

                                                </div>


                                            </div>


                                        </div>

                                        <div className='flex justify-end'>
                                            <h1 className={` pl-5 ${click ? 'rotated-card' : ''}`}>
                                                Firma autorizada
                                            </h1>
                                        </div>
                                        <div className='mt-10'>
                                            <p className={`text-start pl-5 ${click ? 'rotated-card' : ''}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae repellat sed deleniti nihil similique, exercitationem numquam ducimus mollitia quibusdam delectus reprehenderit repellendus! Quisquam ad sapiente vel error exercitationem corrupti.</p>
                                        </div>

                                    </div>








                                </div>

                            ) : (
                                <div className={`w-[600px] h-[400px] rounded-[1.35rem] relative text-white shadow-2xl `}>
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

                                </div>




                            )

                            }
                        </div>
                        <form className='mt-[10px]' action="">
                            <label htmlFor="saldoDisponible" className='text-black text-xl sm:text-2xl  mt-10 font-semibold'>Saldo disponible</label>
                            <input
                                type="text"
                                id="saldoDisponible"
                                className="bg-customBg form-input font-semibold mt-4 w-full px-4 py-2 border rounded-lg text-black"
                                value=''
                                readOnly
                                placeholder="Saldo disponible"
                            />
                        </form>
                    </div>


                    <div>
                        <div className="flex items-center mb-5">
                            <input
                                type="checkbox"
                                id="tarjeta1"
                                checked={tarjeta2Seleccionada}
                                onChange={handleTarjeta2Change}
                                className="rounded-full appearance-none w-6 h-6 border-2 border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none"
                            />
                            <label htmlFor="tarjeta1" className="ml-2 text-black text-xl sm:text-2xl  font-custom font-semibold">
                                Tarjeta 2
                            </label>
                        </div>
                        <div onClick={handleCardClick2}>
                            {click2 ? (
                                <div className={`w-[600px] h-[400px] rounded-[1.35rem] relative text-white shadow-2xl ${click2 ? 'rotated-card' : ''}`}>
                                    <img class="relative object-cover w-full h-full rounded-[1.35rem]" src={tarjeta2} />
                                    <div class={'  absolute top-10 h-[34vh] flex flex-col  '}>
                                        <div className='w-[599px]'>


                                            <div class="pt-1 bg-black h-[5rem] ">


                                            </div>
                                        </div>

                                        <div className='flex items-end justify-end'>

                                            <div className='bg-green-200 '>

                                                <p className={`text-black ${click2 ? 'rotated-card' : ''}`}>305</p>
                                            </div>

                                            <div className='w-[20vw] '>

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
                                <div className={`w-[600px] h-[400px] rounded-[1.35rem] relative text-white shadow-2xl `}>
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
                                                    4558  2256  6633  8524
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
                                                        11/20
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
                                                        03/27
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




                                </div>




                            )

                            }
                        </div>

                        <form className='mt-[10px] ' action="">
                            <label htmlFor="saldoDisponible" className='text-black text-xl sm:text-2xl  mt-10 font-semibold'>Saldo disponible</label>
                            <input
                                type="text"
                                id="saldoDisponible"
                                className="bg-customBg form-input font-semibold mt-4 w-full px-4 py-2 border rounded-lg text-black"
                                value=''
                                readOnly
                                placeholder="Saldo disponible"
                            />
                        </form>
                    </div>






                </div>

            </div>


            <div className='h-[29vh] flex flex-col justify-center items-center'>
                <form onSubmit={EnvioFormulario} className='w-[40vw]'>
                    <div className="mb-4">
                        <input type="numero" onChange={(e) => setNumeroTarjeta(e.target.value)} id="numero" className="bg-customBg form-input w-full bg-customGray px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Monto" />
                    </div>
                    <div className="mb-6">
                        <input type="numero" onChange={(e) => setPin(e.target.value)} id="pin" className="bg-customBg form-input w-full bg-customGray px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Destinatario" />
                    </div>
                    {tarjeta1Seleccionada ? (
                        <Link to={'/transfTarjeta1'}>
                            <button type="submit" className="w-full bg-customGray text-customBlack px-4 py-2 rounded-lg hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Transferir</button>
                        </Link >
                    ) : tarjeta2Seleccionada ? (
                        <Link to={'/transfTarjeta2'}>
                            <button type="submit" className="w-full bg-customGray text-customBlack px-4 py-2 rounded-lg hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Transferir</button>
                        </Link >
                    ) : null}
                </form>


            </div>

        </div>
    );
};

export { Transferir };
