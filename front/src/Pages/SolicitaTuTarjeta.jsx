import tarjetasSinDatos from './../icons/Tarjetasindatos.png'
import { BsCheckLg } from "react-icons/bs";

function SolicitaTuTarjeta() {
  return (
    <div>
    {/*primera seccion */}
      <div className="bg-customGrey w-full xs:h-[500px] xl:h-96  ">
        <div className="xs:ml-4 xl:ml-48 flex flex-col gap-10 ">
          <p className="text-yellow-400 xs:w-[380px] xl:w-[600px] xs:text-3xl xs:text-center xl:text-4xl mt-6 font-semibold">
            Tarjeta de credito Saint Patrick
          </p>
          <h1 className="xs:text-3xl xl:text-5xl xs:text-center text-white xs:w-[380]xl:w-[800px] font-semibold">
            La tarjeta de credito para gestionar tus transacciones
          </h1>
          <p className="text-yellow-400 xs:mt-32 xs:w-[380px] xl:w-[700px] xs:text-center xs:text-2xl xl:text-3xl mt-6 font-semibold">
            Pedila 100% online y comenzara a disfrutar
          </p>
        </div>
      </div>
      <div className='relative flex justify-end '>
         <div className='w-[40%] h-[40%] absolute xs:mt-[-270px] xl:mt-[-200px] xs: mr-28 xl:mr-16 '>
        <img src={tarjetasSinDatos} />
      </div>
      </div>
      {/*segunda seccion */}
      <div className=" w-full h-auto flex flex-col">
        <div className="xs:ml-6 xl:ml-48">
          <h1 className="text-black xl:w-[700px] xs:text-3xl xl:text-4xl mt-12 font-semibold">
           Solicita tu tarjeta Saint Patrick GRATIS
          </h1>
          <div>
             <h1 className="text-5xl text-white xl:w-[800px] font-semibold">
            La tarjeta de credito para gestionar tus transacciones
          </h1>
          </div>
          <div className='flex flex-col gap-10 mt-[-40px]'>
          <p className="text-black xl:w-[700px] text-2xl font-bold">
            Conocer los beneficios
          </p>
          <div>
            <p className="flex items-center xs:text-2xl xl:text-3xl"><BsCheckLg className="text-customYellow w-[60px] h-[50px]" />Tarjeta Premium</p>
          <p className='flex items-center xs:text-2xl xl:text-3xl'><BsCheckLg className="text-customYellow w-[60px] h-[50px]" />Tarjeta Classic</p>
          </div>
          <button className="xs:ml-20 rounded-[15px] xs:w-[220px] xl:w-[441px] h-[59px] mb-20 bg-customYellow text-black font-semibold xs:text-lg xl:text-[25px]">
            Quiero mi tarjeta
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SolicitaTuTarjeta;
