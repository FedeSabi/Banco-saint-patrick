import LogoSinColor from './../icons/logo sin naranja.png'
import { MdBarChart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { SiJabber } from "react-icons/si";
import { RxCrosshair2 } from "react-icons/rx";
import { VscOrganization } from "react-icons/vsc";
import NavbarInterno from "./NavbarInterno";
const Institucional = () => {
  return (
    <div>
  <NavbarInterno />
  <div className="flex justify-around mb-28 mt-10">
    <div className="flex flex-col w-80 text-center items-center gap-6">
      <img
        src={LogoSinColor}
        alt="Logo Sin Naranja"
        className="w-16 h-20"
      />
      <h1 className="text-2xl font-bold text-customGreen">Inicio</h1>
      <p className="text-xl">
        Establecido el 17 de Noviembre de 2021 como Banco Saint Patrick,
        creado en Argentina
      </p>
    </div>
    <div className="flex flex-col w-80 text-center items-center gap-3">
      <MdBarChart className="w-20 h-24 text-customGreen" />
      <h1 className="text-2xl font-bold text-customGreen">Crecimiento</h1>
      <p className="text-xl">
        Al poco tiempo se posicionó como uno de los mejores Home Banking
        para realizar transacciones, entre otras operaciones financieras
      </p>
    </div>
    <div className="flex flex-col w-80 text-center items-center gap-3">
      <TbWorld className="w-20 h-24 text-customGreen" />
      <h1 className="text-2xl font-bold text-customGreen">
        SP en el mundo
      </h1>
      <p className="text-xl">
        a través de un continuo esfuerzo y desarrollo estable, se consolidó
        como el Home banking más confiable, eficiente y seguro en países
        sudamericanos{" "}
      </p>
    </div>
  </div>
  <div className="flex justify-around mb-28 mt-10">
    <div className="flex flex-col w-80 text-center items-center gap-3">
      <SiJabber className="w-20 h-24 text-customGreen" />
      <h1 className="text-2xl font-bold text-customGreen">Innovación</h1>
      <p className="text-xl">
        SP cuenta con una estructura empresarial diversificada, fuerte capacidad de innovación y competitividad en el mercado
      </p>
    </div>
    <div className="flex flex-col w-80 text-center items-center gap-3">
      <RxCrosshair2 className="w-20 h-24 text-customGreen" />
      <h1 className="text-2xl font-bold text-customGreen">Alcance</h1>
      <p className="text-xl">
        En la actualidad, brinda productos y servicios financieros de calidad en 13 países y regiones alrededor del mundo
      </p>
    </div>
    <div className="flex flex-col w-80 text-center items-center gap-3">
      <VscOrganization className="w-20 h-24 text-customGreen" />
      <h1 className="text-2xl font-bold text-customGreen">
        Estructura
      </h1>
      <p className="text-xl">
        Con un número superior a 12000 empleados, atiende a 2 millones de clientes individuos, desde canales tradicionales e internet{" "}
      </p>
    </div>
  </div>
</div>

  );
};
export default Institucional;
