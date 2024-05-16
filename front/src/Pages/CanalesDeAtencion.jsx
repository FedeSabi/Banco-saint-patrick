import { CgLaptop } from "react-icons/cg";
import { MdHeadsetMic } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { GrAtm } from "react-icons/gr";
import NavbarInterno from "./NavbarInterno";

const CanalesDeAtencion = () => {
  return (
    <div>
     <NavbarInterno />
      {/*primera fila */}
      <div className="sm:flex ml-16 items-center flex-col md:flex lg:flex-row xl:flex-row 2xl:flex-row justify-evenly mb-28 mt-10">
        <div className="flex flex-col w-72 text-center items-center gap-6 mb-12 ">
          <CgLaptop className="w-20 h-24 text-customGreen" />
          <h1 className="text-2xl font-bold text-customGreen">
            Online Banking
          </h1>
          <p className="text-xl">
            Consulta tus cuentas y tarjetas de credito, paga, transferi y
            realiza tus transacciones de maneja segura
          </p>
        </div>
        <div className="flex flex-col w-72 text-center items-center gap-6 ">
          <MdHeadsetMic className="w-20 h-24 text-customGreen" />
          <h1 className="text-2xl font-bold text-customGreen">
            Banca Telefonica
          </h1>
          <p className="text-xl">Asesoramiento sobre productos y servicios</p>
        </div>
      </div>
      {/*segunda fila */}
      <div className="sm:flex ml-16 items-center flex-col  md:flex lg:flex-row xl:flex-row 2xl:flex-row justify-evenly mb-28 mt-10">
        <div className="flex flex-col w-72 text-center items-center gap-6 mb-12">
          <GiPositionMarker className="w-20 h-24 text-customGreen" />
          <h1 className="text-2xl font-bold text-customGreen">Sucursales</h1>
          <p className="text-xl">
            Encontra tu sucursal mas cercana de forma simple y comoda
          </p>
        </div>
        <div className="flex flex-col w-72 text-center items-center gap-6">
          <GrAtm className="w-20 h-24 text-customGreen" />
          <h1 className="text-2xl font-bold text-customGreen">Autoservicio</h1>
          <p className="text-xl">
            Acreditacion al instante y horario extendido
          </p>
        </div>
      </div>
    </div>
  );
};
export default CanalesDeAtencion;
