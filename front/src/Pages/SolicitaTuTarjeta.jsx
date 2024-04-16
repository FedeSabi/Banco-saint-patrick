import tarjetasSinDatos from './../icons/Tarjetasindatos.png'
import { BsCheckLg } from "react-icons/bs";

function SolicitaTuTarjeta() {
  return (
    <div>
    {/*primera seccion */}
      <div className="bg-customGrey w-full h-96  ">
        <div className="ml-48 flex flex-col gap-10 ">
          <p className="text-yellow-400 w-[600px] text-4xl mt-6 font-semibold">
            Tarjeta de credito Saint Patrick
          </p>
          <h1 className="text-5xl text-white w-[800px] font-semibold">
            La tarjeta de credito para gestionar tus transacciones
          </h1>
          <p className="text-yellow-400 w-[700px] text-3xl mt-6 font-semibold">
            Pedila 100% online y comenzara a disfrutar
          </p>
        </div>
      </div>
      <div className='relative flex justify-end '>
         <div className='w-[40%] h-[40%] absolute mt-[-300px] mr-16 '>
        <img src={tarjetasSinDatos} />
      </div>
      </div>
     
      {/*segunda seccion */}
      <div className=" w-full h-auto flex flex-col">
        <div className="ml-48">
          <h1 className="text-black w-[700px] text-4xl mt-12 font-semibold">
           Solicita tu tarjeta Saint Patrick GRATIS
          </h1>
          <h1 className="text-5xl text-white w-[800px]  font-semibold">
            La tarjeta de credito para gestionar tus transacciones
          </h1>
          <div className='flex flex-col gap-10'>
          <p className="text-black w-[700px] text-3xl font-bold">
            Conocer los beneficios
          </p>
          <div>
            <p className="flex items-center text-3xl"><BsCheckLg className="text-customYellow w-[60px] h-[50px]" />Tarjeta Premium</p>
          <p className='flex items-center text-3xl'><BsCheckLg className="text-customYellow w-[60px] h-[50px]" />Tarjeta Classic</p>
          </div>
          <button className="rounded-[15px] w-[441px] h-[59px] mb-20 bg-customYellow text-black font-semibold text-[30px]">
            Quiero mi tarjeta
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SolicitaTuTarjeta;
