import { BiPackage } from "react-icons/bi";
import { IconParkOutlineAssemblyLine } from "../icons/IconParkOutlineAssemblyLine";
import { TbVectorTriangle } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbFileArrowLeft } from "react-icons/tb";
import { TbCoin } from "react-icons/tb";
import { BsCreditCard } from "react-icons/bs";
import NavbarInterno from "./NavbarInterno";

const ProductosYservicios = () => {
  return (
    <div>
      <NavbarInterno />
      {/*primer fila de iconos */}
      <div className=" flex xs:flex-col xl:flex-row justify-evenly items-center h-full font-semibold text-customGreen mb-10 mt-16">
        <div className="flex flex-col text-center items-center gap-1 ">
          <BiPackage style={{ fontSize: "92.88px" }} />
          <p className="text-xl">Paquetes</p>
        </div>
        <div className="flex flex-col w-80 text-center items-center gap-1">
          <TbVectorTriangle style={{ fontSize: "92.88px" }} />
          <p className="text-xl">Canales de servicio</p>
        </div>
        <div className="flex flex-col w-80 text-center items-center gap-1">
          <IconParkOutlineAssemblyLine style={{ fontSize: "92.88px" }} />
          <p className="text-xl"> Giros y Transferencias </p>
        </div>
      </div>
      {/*segunda fila de iconos */}
      <div className="flex justify-evenly items-center h-full font-semibold text-customGreen mb-10 mt-16">
        <div className="flex flex-col text-center items-center gap-1 ">
          <FaMoneyBillTransfer style={{ fontSize: "92.88px" }} />
          <p className="text-xl">Prestamos</p>
        </div>
        <div className="flex flex-col w-80 text-center items-center gap-1">
          <FaMoneyCheckDollar style={{ fontSize: "92.88px" }} />
          <p className="text-xl">E-cheq</p>
        </div>
      </div>
      {/*primer fila de iconos */}
      <div className="flex justify-evenly items-center h-full font-semibold text-customGreen mb-10 mt-16">
        <div className="flex flex-col text-center items-center gap-1 ">
          <TbFileArrowLeft style={{ fontSize: "92.88px" }} />
          <p className="text-xl">Historial de movimientos</p>
        </div>
        <div className="flex flex-col w-80 text-center items-center gap-1">
          <TbCoin style={{ fontSize: "92.88px" }} />
          <p className="text-xl">Cuentas</p>
        </div>
        <div className="flex flex-col w-80 text-center items-center gap-1">
          <BsCreditCard style={{ fontSize: "92.88px" }} />
          <p className="text-xl">Tarjetas</p>
        </div>
      </div>
    </div>
  );
};
export default ProductosYservicios;
