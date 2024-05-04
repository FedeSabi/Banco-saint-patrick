import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }
  const content = (
    <>
      <div className="lg:hidden block relative top-16 w-full left-0 right-0 bg-customGrey transition ">
        <ul className="text-center text-xl text-amber-400 p-20">
          <li className="my-4 py-4 border-b border-amber-400 hover:bg-white hover:rounded">
            <Link spy={true} smooth={true} to={'/SolicitaTuTarjeta'}>Solicita tu tarjeta</Link>
          </li>
          <li className="my-4 py-4 border-b border-amber-400 hover:bg-white hover:rounded">
            <Link spy={true} smooth={true} to={'/'} >Hacete cliente</Link>
          </li>
          <li className="my-4 py-4 border-b border-amber-400 hover:bg-white hover:rounded">
            <Link spy={true} smooth={true} to={'/'}>Preguntas frecuentes</Link>
          </li>
          <li className="my-4 py-4 border-b border-amber-400 hover:bg-white hover:rounded">
            <Link spy={true} smooth={true} to={'/'}>Beneficios</Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-customGrey font-semibold text-2xl lg:py-5 px-20 py-4">
        <div className="flex items-center">
          <img
            className="h-28"
            src="/logo.png"
            alt="logo saint patric"z
          />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-around font-normal hidden">
          <div className="flex-10">
            <ul className="2xl:text-2xl xl:text-2xl lg:text-xl flex gap-12 text-xl font-semibold ">
              <li>
                <Link to={'/SolicitaTuTarjeta'} className="hover:text-yellow-400 transition border-slate-600 hover:border-customGrey cursor-pointer">Solicita tu tarjeta</Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-yellow-400 transition border-slate-600 hover:border-customGrey cursor-pointer">Hacete cliente</Link>
              </li>
              <li>
                <Link to={'/PreguntasFrecuentes'} className="hover:text-yellow-400 transition border-slate-600 hover:border-customGrey cursor-pointer">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link to={'/beneficios'} className="hover:text-yellow-400 transition border-slate-600 hover:border-customGrey cursor-pointer">Beneficios</Link>
              </li>
              <div>
                <button className="rounded-[15px] w-64 h-12 bg-customYellow hover:bg-customGreen hover:text-white text-black font-bold -mt-2" > Iniciar sesion</button>
              </div>
            </ul>
          </div>
        </div>
        <div>
            {click && content}
        </div>
        <button className="block sm:hidden transition text-yellow-400" onClick={handleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



