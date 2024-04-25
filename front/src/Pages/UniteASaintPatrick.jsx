import Persona from './../icons/Unite a Saint Patrick.png'
import NavbarInterno from './NavbarInterno'

const UniteASaintPatrick = () => {
  return (
    <div>
    <NavbarInterno />
    <div className='flex flex-row justify-evenly'>
        {/*divisor imagen */}
        <div className='w-[40%] h-[40%] mt-10'>
          <img src={Persona} />
        </div>
        {/*divisor texto */}
        <div className=' text-customGreen w-[520px] flex flex-col justify-around  gap-2'>
          <div className='text-5xl font-bold  text-left'>
            <h1 className='h-10'>Sumate a nuestro equipo Saint Patrick</h1>
          </div>
          <div className='font-bold mb-20' >
            <p className='text-3xl mb-10'>Postulate a nuestras busquedas y potencia lo mejor de vos</p>
            <p className='text-3xl'>Banco Saint Patrick te alienta a pensar en grande.</p>
          </div>
          <div className='w-[520px]'>
            <button className='bg-amber-500 w-[500px] h-16 text-3xl font-semibold rounded-xl  text-black '>Conocer propuestas</button>
          </div>
        </div>
        </div>
    </div>
  )
}
export default UniteASaintPatrick