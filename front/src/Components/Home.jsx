import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import NavbarInterno from "../Pages/NavbarInterno";
export const Home = () => {
  return (
<<<<<<< HEAD
    <section className="bg-customGreen flex w-full h-[97vh]">
      <div className="w-[52vw]  mb-6">
        <div className="relative z-10 h-[60px] w-screen flex justify-around items-center border-2 border-solid border-customYellow">
          <Link to={"/Institucional"} className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">
            Institucional
          </Link>
          <Link to={'/CanalesDeAtencion'} className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">
            Canales de atención
          </Link>
          <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">
            Conocenos
          </Link>
          <Link className="font-semibold text-[28px] leading-[31.25px] text-customYellow hover:text-black">
            Unite a Saint Patrick
          </Link>
=======
    <>
      <NavbarInterno />
      <section className="bg-customGreen flex w-full">
        <div className="w-[52vw] xs:h-[900px] xl:h-[124vh] -mb-4 mt-16 gap-4">
          <div className="relative z-10 mt-[3rem] ml-[6rem] w-[974px] text-white">
            <h1 className="font-semibold xs:-ml-12 xs:text-[25px] xl:text-[60px] leading-[71.42px]">
              Hacete cliente de Saint Patrick
            </h1>
            <h1 className="font-semibold xs:-ml-4 xs:text-[25px] xl:text-[60px] xl:leading-[71.42px]">
              ¡Te estamos esperando!
            </h1>
          </div>
          <div className="relative ml-[6rem] z-10 flex flex-col gap-[4rem] mt-[5rem] text-white xs:w-[350px] xl:w-[852px] xs:ml-10">
            <p className="flex xs:text-2xl xl:text-[40px] leading-[44.64px]">
              <AiOutlineCheck className="text-customYellow w-[60px] h-[50px] mr-4" />{" "}
              Gestioná tus transacciones de forma ágil y segura
            </p>
            <p className="flex xs:text-2xl xl:text-[40px] leading-[44.64px]">
              <AiOutlineCheck className="text-customYellow w-[90px] h-[50px] mr-4" />{" "}
              Sacá tu tarjeta GRATIS. Descubrí por qué mas de 1 millón de
              personas nos eligen
            </p>
            <p className="flex xs:text-2xl xl:text-[40px] leading-[44.64px]">
              <AiOutlineCheck className="text-customYellow w-[90px] h-[50px] mr-4" />
              Consultá tus movimientos y saldo de manera online, estás tan solo
              a un click de distancia
            </p>
          </div>
          <button className="relative z-10 mt-[3rem] ml-[6rem] rounded-[15px] xs:w-[221px] xl:w-[443px] xl:h-[78px] bg-customYellow text-black font-bold text-[36px] leading-[40.18px]">
            <Link className="xs:text-[20px] xl:text-[30px]" to={"/Registrarse"}>
              {" "}
              Quiero ser Cliente{" "}
            </Link>
          </button>
>>>>>>> e9dd49af13639d6f955edba1b208a8f67699b363
        </div>
        <div className="xs:hidden xl:block w-[47vw] h-[83vh] flex justify-center items-center">
          <img
            className="w-[45vw] ml-10 mb-20"
            src="/hand-card.png"
            alt="logo saint patric"
          />
        </div>
<<<<<<< HEAD
        <div className="relative ml-[6rem] z-10 flex flex-col gap-[2rem] mt-[5rem] text-white w-[852px]">
          <p className="flex text-[40px] leading-[44.64px]">
          <AiOutlineCheck className="text-customYellow w-[60px] h-[50px] mr-4" />{" "}
            Gestioná tus transacciones de forma ágil y segura
          </p>
          <p className="flex text-[40px] leading-[44.64px]">
          <AiOutlineCheck className="text-customYellow w-[90px] h-[50px] mr-4" />{" "}
            Sacá tu tarjeta GRATIS. Descubrí por qué mas de 1 millón de personas
            nos eligen
          </p>
          <p className="flex text-[40px] leading-[44.64px]">
            <AiOutlineCheck className="text-customYellow w-[90px] h-[50px] mr-4" />
            Consultá tus movimientos y saldo de manera online, estás tan solo a
            un click de distancia
          </p>
        </div>
        <button className="relative z-10 mt-[3rem] ml-[6rem] rounded-[15px] w-[443px] h-[78px] bg-customYellow text-black font-bold text-[36px] leading-[40.18px]">
          <Link className="text-[30px]" to={"/Registrarse"}>
            {" "}
            Quiero ser Cliente{" "}
          </Link>
        </button>
      </div>

      <div className="w-[38vw] h-[61vh] flex justify-center items-center">
        <img
          className=" w-[45vw] ml-10 mt-72"
          src="/hand-card.png"
          alt="logo saint patric"
        />
      </div>
    </section>
=======
      </section>
    </>
>>>>>>> e9dd49af13639d6f955edba1b208a8f67699b363
  );
};
