import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Home } from "./Components/Home";
import Beneficios from "./Pages/Beneficios";
//import { Login } from "./Pages/Login";
import { Registrarse } from "./Pages/Registrarse";
//import { useState } from "react";
import { HomeTarjetas } from "./Pages/HomeTarjetas";
import Footer from "./Components/Footer";
import PreguntasFrecuentes from "./Pages/PreguntasFrecuentes";
import Institucional from "./Pages/Institucional";
import ProductosYservicios from "./Pages/ProductosYservicios";
import CanalesDeAtencion from "./Pages/CanalesDeAtencion";
import UniteASaintPatrick from "./Pages/UniteASaintPatrick";
import Navbar from "./Components/Navbar";


/*const RenderNavbar = ({ login, onLogout }) => {
  const navigate = useNavigate();

  const shouldRenderNavbar = !["/Registrarse", "/Login"].includes(
    window.location.pathname
  );

  return shouldRenderNavbar ? (
    <Navbar login={login} onLogout={onLogout} />
  ) : null;
};*/

function App() {
  /*const [login, setLogin] = useState("");
  console.log(login);

  const handleLogout = () => {
    setLogin("");
  };
*/
  return (
    <BrowserRouter>
    <Navbar />
      {/*<RenderNavbar login={login} onLogout={handleLogout} />*/}
      <Routes>
        <Route path="/" element={<Home />} />
       {/*} <Route path="/Login" element={<Login setLogin={setLogin} />} />*/}
        <Route path="/HomeTarjetas" element={<HomeTarjetas />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/Beneficios" element={<Beneficios />} />
        <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/Institucional" element={<Institucional />} />
        <Route path="/Productosyservicios" element={<ProductosYservicios />} />
        <Route path="/CanalesDeAtencion" element={<CanalesDeAtencion />}/>
        <Route path="/UniteASaintPatrick" element={<UniteASaintPatrick />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
