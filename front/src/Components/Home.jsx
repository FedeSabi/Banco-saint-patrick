import { Link } from "react-router-dom"

export const Home =()=>{
    return(
        <section className="bg-customGreen">
            <div className="h-[60px] w-screen flex justify-around items-center border-2 border-solid border-customYellow">
                <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">Institucional</Link>
                <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">Canales de atención</Link>
                <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">Conocenos</Link>
                <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">Unite a Saint Patrick</Link>
            </div>
            <div>
                <h1 className="relative font-semibold text-[64px] leading-[71.42px] text-white w-[974px] ml-[192px] mt-10 z-10">Hacete cliente de Saint Patrick</h1>
                <h1 className="relative font-semibold text-[64px] leading-[71.42px] text-white w-[974px] ml-[192px] z-10">¡Te estamos esperando!</h1>
            </div>
            <div>
                <p>Gestioná tus transacciones de forma ágil y segura</p>
                <p>Sacá tu tarjeta GRATIS. Descubrí por qué mas de 1 millón de personas nos eligen</p>
                <p>Consultá tus movimientos y saldo de manera online, estás tan solo a un  click de distancia</p>
            </div>
            <img
                className="w-[700px] absolute right-0 top-[149px] z-1"
                src="/hand-card.png"
                alt="logo saint patric"
                />
        </section>
    )
}