import { Link, NavLink } from "react-router-dom"

export const Navbar =()=>{
    return(
        <nav className="h-[160px] w-screen flex justify-between items-center">
            <NavLink to='/'>   
                <img
                className="h-[120px] ml-[37px]"
                src="/logo.png"
                alt="logo saint patric"
                />
            </NavLink>
                <Link className="font-semibold text-2xl leading-7 text-customGrey hover:text-black">Solicitá tu tarjeta</Link>
                <Link className="font-semibold text-2xl leading-7 text-customGrey hover:text-black">Hacete cliente</Link>
                <Link className="font-semibold text-2xl leading-7 text-customGrey hover:text-black">Preguntas frecuentes</Link>
                <Link className="font-semibold text-2xl leading-7 text-customGrey hover:text-black">Beneficios</Link>
            <button className="mr-[37px] h-[59px] w-[310px] bg-customYellow rounded-[15px] font-semibold text-2xl leading-7">Iniciar sesión</button>
        
        </nav>
    )
}