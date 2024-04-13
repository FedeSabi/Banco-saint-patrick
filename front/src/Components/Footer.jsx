
import logo from './../icons/logo.png';

const Footer = () => {
  return (
    <div className="flex items-end w-full">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-14 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <img src={logo} alt="Logo" className="w-24 h-28 ml-4" />
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <a href="#" className="mb-3 text-sm font-medium tracking-widest text-gray-900 hover:text-yellow-600 uppercase title-font">Home</a>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Solicita Tu Tarjeta</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Hacete Cliente</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Preguntas Frecuentes</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Beneficios</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <a href="#" className="mb-3 text-sm font-medium tracking-widest text-gray-900 hover:text-yellow-600 uppercase title-font">Iniciar Sesion</a>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Tarjetas</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Transferir</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Historial De Transacciones</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Conocer Propuestas</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <a href='#' className="mb-3 text-sm font-medium tracking-widest text-gray-900  hover:text-yellow-600 uppercase title-font">Institucional</a>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Proyectos y Servicios</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Canales De Atencion</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Unete A Saint Patrick</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <a href='#' className="mb-3 text-sm font-medium tracking-widest text-gray-900  hover:text-yellow-600 uppercase title-font">Contact</a>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Send a Message</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">Request a Quote</a>
                </li>
                <li className="mt-3">
                  <a href="#" className="text-yellow-600 cursor-pointer hover:text-gray-900">+123-456-7890</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-customGreen">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-yellow-500 capitalize xl:text-center">© 2024 All rights reserved </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

