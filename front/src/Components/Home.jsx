import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa";
export const Home =()=>{
    return(
        <section className="bg-customGreen">
            <div className="relative z-10 h-[60px] w-screen flex justify-around items-center border-2 border-solid border-customYellow">
                <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">Institucional</Link>
                <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">Canales de atención</Link>
                <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">Conocenos</Link>
                <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">Unite a Saint Patrick</Link>
            </div>
            <div className="relative z-10 mt-[3rem] ml-[6rem] w-[974px] text-white">
                <h1 className="font-semibold text-[64px] leading-[71.42px]">Hacete cliente de Saint Patrick</h1>
                <h1 className="font-semibold text-[64px] leading-[71.42px]">¡Te estamos esperando!</h1>
            </div>
            <div className="relative ml-[6rem] z-10 flex flex-col gap-[2rem] mt-[5rem] text-white w-[852px]">
            <p className="flex text-[40px] leading-[44.64px]"><FaCheck className="text-customYellow mr-[1rem]" /> Gestioná tus transacciones de forma ágil y segura</p>
            <p className="flex text-[40px] leading-[44.64px]"><FaCheck className="text-customYellow mr-[1rem]" /> Sacá tu tarjeta GRATIS. Descubrí por qué mas de 1 millón de personas nos eligen</p>
            <p className="flex text-[40px] leading-[44.64px]"><FaCheck className="text-customYellow mr-[1rem]" />Consultá tus movimientos y saldo de manera online, estás tan solo a un  click de distancia</p>
            </div>
            <button className="relative z-10 my-[3rem] ml-[6rem] rounded-[15px] w-[443px] h-[78px] bg-customYellow text-black font-bold text-[36px] leading-[40.18px]">
                Quiero ser cliente
            </button>
            <img
                className="w-[700px] absolute z-1 right-0 top-[149px]"
                src="/hand-card.png"
                alt="logo saint patric"
            />
        </section>
    )
}