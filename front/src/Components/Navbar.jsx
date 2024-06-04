
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
      <div className="lg:hidden block relative top-16 w-full left-0 right-0 bg-customGrey transition" onClick={handleClick}>
        <ul className="text-center text- w-full text-amber-400 p-28">
          <li className="my-4 py-4 border-b border-amber-400 hover:bg-white hover:rounded">
            <Link spy={true} smooth={true} to={'/SolicitaTuTarjeta'}>Solicita tu tarjeta</Link>
          </li>
          <li className="my-4 py-4 border-b border-amber-400 hover:bg-white hover:rounded">
            <Link spy={true} smooth={true} to={'/'} >Hacete cliente</Link>
          </li>
          <li className="my-4 py-4 border-b border-amber-400 hover:bg-white hover:rounded">
            <Link spy={true} smooth={true} to={'/PreguntasFrecuentes'}>Preguntas frecuentes</Link>
          </li>
          <li className="my-4 py-4 border-b border-amber-400 hover:bg-white hover:rounded">
            <Link spy={true} smooth={true} to={'/Beneficios'}>Beneficios</Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className=" h-10vh flex justify-around z-50 text-customGrey font-semibold text-2xl lg:py-5 pr-20 py-4 ">
        <div className="xs:hidden md:block  ">
          <Link to={'/'}>
          <img
            className="h-28"
            src="/logo.png"
            alt="logo saint patric"z
          />
         </Link>
         
        </div>
        <div className=" hidden xs:hidden  md:hidden lg:flex items-center justify-around font-normal ">
          <div className="flex-10">
            <ul className="w-[81vw] 2xl:text-3xl 2xl:flex justify-between xl:text-2xl lg:text-md flex gap-[2rem] text-xl font-semibold ">
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
                <Link to={'/Login'}>
                <button className="rounded-[15px] xl:w-48 lg:w-48 2xl:w-64 h-12 bg-customYellow text-black 2xl:text-2xl font-bold -mt-2" > Iniciar sesion</button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="xs:-m-20">
            {click && content}
        </div>
        <button className="xs:h-40 xs:ml-[30px] block lg:hidden transition text-yellow-400" onClick={handleClick}>
          {click ? <FaTimes className="hidden" /> : <GiHamburgerMenu className="xs:w-[50px] xs:h-[50px] "/>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


