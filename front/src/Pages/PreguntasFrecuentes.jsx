import { IoIosArrowForward } from "react-icons/io";

const PreguntasFrecuentes = () => {
  return (
    <div className="bg-customGreen h-[950px]">
        <div>
            <h1 className="text-white xs:text-3xl xl:text-4xl text-center mb-24 pt-32">Preguntas Frecuentes</h1>
        </div>
        <div className="text-white xs:text-center xl:text-left xl:ml-32 xs:text-xl xl:text-3xl font-almarai">
            <p className="mb-4 flex items-center">
            <IoIosArrowForward className="text-customYellow xs:[40px] xl:w-[60px] xs:h-[30px] xl:h-[50px]" />¿Que tipos de tarjetas ofrece Saint Patrick?</p>
            <p className="mb-4 flex items-center"><IoIosArrowForward className="text-customYellow xs:[40px] xl:w-[60px] xs:h-[30px] xl:h-[50px]" />¿Puedo sacar mas de una tarjeta?</p>
            <p className="mb-4 flex items-center"><IoIosArrowForward className="text-customYellow xs:[40px] xl:w-[60px] xs:h-[30px] xl:h-[50px]" />¿Que voy a poder hacer con la cuenta y la tarjeta de credito?</p>
            <p className="mb-4 flex items-center"><IoIosArrowForward className="text-customYellow xs:[40px] xl:w-[60px] xs:h-[30px] xl:h-[50px]" />¿Que necesito para sacar gratis una cuenta y una tarjeta Saint Patrick?</p>
            <p className="mb-4 flex items-center"><IoIosArrowForward className="text-customYellow xs:[40px] xl:w-[60px] xs:h-[30px] xl:h-[50px]" />¿Como puedo sacar mi cuenta y tarjeta en Saint Patrick?</p>
            <p className="mb-4 flex items-center"><IoIosArrowForward className="text-customYellow xs:[40px] xl:w-[60px] xs:h-[30px] xl:h-[50px]" />¿Que beneficios obtengo por ser cliente de Saint Patrick?</p>
            <p className="mb-4 flex items-center"><IoIosArrowForward className="text-customYellow xs:[40px] xl:w-[60px] xs:h-[30px] xl:h-[50px]" />¿Puedo dar de baja la cuenta en cualquier momento?</p>
            <p className="mb-4 flex items-center"><IoIosArrowForward className="text-customYellow xs:[40px] xl:w-[60px] xs:h-[30px] xl:h-[50px]" />¿Si soy emprendedor o monotributista,¿puedo aplicar a estas cuentas?</p>
        </div>
    </div>
  )
}
export default PreguntasFrecuentes