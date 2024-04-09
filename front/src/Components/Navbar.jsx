import { Link, NavLink } from "react-router-dom";



export const Navbar = ({ login, onLogout }) => {





    return (
        <nav className={`h-[129px] w-screen flex justify-between items-center ${login ? 'bg-[#005758]' : ''}`} >
            <NavLink to='/'>
                <img
                    className="h-[120px] ml-[37px]"
                    src="/logo.png"
                    alt="logo saint patric"
                />
            </NavLink>
            <Link className={`${login ? 'text-[#F6F6F6]' : "font-semibold text-2xl leading-7 text-customGrey hover:text-black"}`}>Solicitá tu tarjeta</Link>
            <Link className={`${login ? 'text-[#F6F6F6]' : "font-semibold text-2xl leading-7 text-customGrey hover:text-black"}`}>Hacete cliente</Link>
            <Link className={`${login ? 'text-[#F6F6F6]' : "font-semibold text-2xl leading-7 text-customGrey hover:text-black"}`}>Preguntas frecuentes</Link>
            <Link className={`${login ? 'text-[#F6F6F6]' : "font-semibold text-2xl leading-7 text-customGrey hover:text-black"}`}>Beneficios</Link>
            {!login && (
                <div className="mr-[37px]">
                    <button className="h-[59px] w-[310px] bg-customYellow rounded-[15px] font-semibold text-2xl leading-7">
                        <Link to={"/Login"}>Iniciar sesión</Link>
                    </button>
                </div>
            )}

            {login && (
                <div className="flex items-center">
                    <p className={`${login ? 'text-[#F6F6F6]' : "font-semibold text-2xl leading-7 text-customGrey hover:text-black"}`}>¡Hola! {login}</p>
                    <span>
                        <svg className="size-[40px] mr-[30px]" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.9999 40C43.9782 40 47.7935 38.4196 50.6065 35.6066C53.4196 32.7936 54.9999 28.9782 54.9999 25C54.9999 21.0218 53.4196 17.2064 50.6065 14.3934C47.7935 11.5804 43.9782 10 39.9999 10C36.0217 10 32.2064 11.5804 29.3933 14.3934C26.5803 17.2064 24.9999 21.0218 24.9999 25C24.9999 28.9782 26.5803 32.7936 29.3933 35.6066C32.2064 38.4196 36.0217 40 39.9999 40ZM63.6749 70C66.7649 70 69.1399 67.195 68.0349 64.305C65.8673 58.6254 62.0259 53.738 57.0192 50.2898C52.0125 46.8417 46.0766 44.9954 39.9974 44.9954C33.9182 44.9954 27.9824 46.8417 22.9757 50.2898C17.969 53.738 14.1276 58.6254 11.9599 64.305C10.8599 67.195 13.2299 70 16.3199 70H63.6749Z" fill="#F6F6F6" />
                        </svg>
                    </span>
                    <Link to={'/'}>
                        <button onClick={onLogout} className={`${login ? 'text-[#F6F6F6] mr-[30px]' : "font-semibold text-2xl leading-7 text-customGrey hover:text-black mr-[20px]"}`}>Cerrar sesión</button>
                    </Link>
                </div>

            )}

        </nav>
    )
}


