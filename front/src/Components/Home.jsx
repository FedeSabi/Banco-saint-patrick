import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import NavbarInterno from "../Pages/NavbarInterno";
export const Home = () => {
  return (
    <>
      <NavbarInterno />
      <section className="bg-customGreen flex w-full">
        <div className="w-[52vw] xs:h-[900px] md:h-[730px] xl:h-[95vh] -mb-4 mt-16 gap-4">
          <div className="w-full relative z-10 mt-[3rem] ml-[6rem] xs:ml-[0px] xs:flex flex-col items-center  xs:w-[392px] sm:w-[600px] sm:items-start sm:ml-[10px] md:w-[768px] md:items-center lg:w-[1024px] xl:items-start xl:[600px] xl:ml-[107px] 2xl:w-[974px] 2xl:ml-[189px] text-white">
            <h1 className="font-semibold ml-12 xs: ml-[0] xs:text-[25px] md:text-[39px] lg:text-[51px] xl:text-[45px] 2xl:text-[61px] leading-[71.42px]">
              Hacete cliente de Saint Patrick
            </h1>
            <h1 className="font-semibold  xs:text-[25px] md:text-[31px] lg:text-[51px] xl:text-[45px] 2xl:text-[61px] xl:leading-[71.42px]">
              ¡Te estamos esperando!
            </h1>
          </div>
          <div className="w-full relative ml-[6rem]  z-10 flex flex-col gap-[4rem] mt-[5rem] text-white xs:w-[350px] md:w-[758px] md:ml-[10px] lg:w-[1024px] xl:w-[752px] xl:ml-[107px] 2xl:w-[90%] 2xl:h-[50vh] 2xl:justify-center xs:ml-10 2xl:ml-[189px]">
            <p className="flex xs:text-2xl xl:text-[27px] 2xl:text-[48px]  leading-[44.64px]">
              <AiOutlineCheck className="text-customYellow w-[60px] h-[50px] mr-4" />{" "}
              Gestioná tus transacciones de forma ágil y segura
            </p>
            <p className="flex xs:text-2xl xl:text-[27px] 2xl:text-[48px] 2xl:leading-[54.64px]">
              <AiOutlineCheck className="text-customYellow w-[90px] h-[50px] mr-4" />{" "}
              Sacá tu tarjeta GRATIS. Descubrí por qué mas de 1 millón de
              personas nos eligen
            </p>
            <p className="flex xs:text-2xl xl:text-[27px] 2xl:text-[48px] 2xl:leading-[54.64px]">
              <AiOutlineCheck className="text-customYellow w-[90px] h-[50px] mr-4" />
              Consultá tus movimientos y saldo de manera online, estás tan solo
              a un click de distancia
            </p>
          </div>
          <button className="relative z-10 mt-[3rem] ml-[5px] sm:ml-[12rem] md:ml-[1rem] lg:ml-[2rem] xl:ml-[7rem] 2xl:ml-[12rem] rounded-[15px] xs:w-[221px] xl:w-[317px] xl:h-[78px] bg-customYellow text-black font-bold text-[36px] leading-[40.18px]">
            <Link className="text-[11px] xs:text-[20px] xl:text-[30px]" to={"/Registrarse"}>
              {" "}
              Quiero ser Cliente{" "}
            </Link>
          </button>
        </div>
        <div className="hidden xs:hidden xl:flex 2xl:w-[37vw]  justify-center items-center">
  <img
    className="max-w-full h-auto mx-auto"
    src="/hand-card.png"
    alt="logo saint patric"
  />
</div>


      </section>
    </>
  );
};
