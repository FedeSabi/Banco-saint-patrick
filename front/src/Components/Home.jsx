import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import NavbarInterno from "../Pages/NavbarInterno";
export const Home = () => {
  return (
    <>
      <NavbarInterno />
      <section className="bg-customGreen flex w-full">
        <div className="w-[52vw] h-[124vh] mb-6">
          <div className="relative z-10 mt-[3rem] ml-[6rem] w-[974px] text-white">
            <h1 className="font-semibold text-[60px] leading-[71.42px]">
              Hacete cliente de Saint Patrick
            </h1>
            <h1 className="font-semibold text-[60px] leading-[71.42px]">
              ¡Te estamos esperando!
            </h1>
          </div>
          <div className="relative ml-[6rem] z-10 flex flex-col gap-[2rem] mt-[5rem] text-white w-[852px]">
            <p className="flex text-[40px] leading-[44.64px]">
              <AiOutlineCheck className="text-customYellow w-[60px] h-[50px] mr-4" />{" "}
              Gestioná tus transacciones de forma ágil y segura
            </p>
            <p className="flex text-[40px] leading-[44.64px]">
              <AiOutlineCheck className="text-customYellow w-[90px] h-[50px] mr-4" />{" "}
              Sacá tu tarjeta GRATIS. Descubrí por qué mas de 1 millón de
              personas nos eligen
            </p>
            <p className="flex text-[40px] leading-[44.64px]">
              <AiOutlineCheck className="text-customYellow w-[90px] h-[50px] mr-4" />
              Consultá tus movimientos y saldo de manera online, estás tan solo
              a un click de distancia
            </p>
          </div>
          <button className="relative z-10 mt-[3rem] ml-[6rem] rounded-[15px] w-[443px] h-[78px] bg-customYellow text-black font-bold text-[36px] leading-[40.18px]">
            <Link className="text-[30px]" to={"/Registrarse"}>
              {" "}
              Quiero ser Cliente{" "}
            </Link>
          </button>
        </div>

        <div className="w-[47vw] h-[83vh] flex justify-center items-center">
          <img
            className=" w-[45vw] ml-10 mt-72"
            src="/hand-card.png"
            alt="logo saint patric"
          />
        </div>
      </section>
    </>
  );
};
