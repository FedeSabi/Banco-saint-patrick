import Persona from './../icons/Unite a Saint Patrick.png'
import NavbarInterno from './NavbarInterno'

const UniteASaintPatrick = () => {
  return (
    <div>
    <NavbarInterno />
    <div className='flex xs:flex-col xl:flex-row  xs:justify-center xl:justify-evenly'>
        {/*divisor imagen */}
        <div className=' xs:w-[65%] xs:h-[65%] xl:w-[40%] xl:h-[40%] mt-10'>
          <img src={Persona} className='xs: ml-28'/>
        </div>
        {/*divisor texto */}
        <div className=' text-customGreen xs:w-[380px] xl:w-[520px] flex flex-col xl:justify-around xs:ml-2 xl:ml-6 mt-20 gap-2'>
          <div className='xs:text-2xl xs:mb-10 xl:text-5xl font-bold  xs:text-center xl:text-left'>
            <h1 className='h-10'>Sumate a nuestro equipo Saint Patrick</h1>
          </div>
          <div className='font-bold mb-20' >
            <p className='xs:text-lg xs:text-center xl:text-left xl:text-3xl mb-10'>Postulate a nuestras busquedas y potencia lo mejor de vos</p>
            <p className='xs:text-lg  xs:text-center xl:text-left xl:text-3xl'>Banco Saint Patrick te alienta a pensar en grande.</p>
          </div>
          <div className='xs:w-[auto] xs:text-center xl:w-[520px]'>
            <button className='bg-amber-500 xs:mb-10 xs:w-[200px] xl:w-[500px] xs:h-12 xl:h-16 xs:text-lg xl:text-3xl font-semibold rounded-xl  text-black '>Conocer propuestas</button>
          </div>
        </div>
        </div>
    </div>
  )
}
export default UniteASaintPatrick