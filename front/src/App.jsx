import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Components/Home";
import Beneficios from "./Pages/Beneficios";
import { Login } from "./Pages/Login";
import { Registrarse } from "./Pages/Registrarse";
import { useState } from "react";
import { HomeTarjetas } from "./Pages/HomeTarjetas";
import { Historial } from "./Pages/Historial";
import { FlujosMovimientos } from "./Pages/FlujosMovimientos";
import { Transferir } from "./Pages/Transferir";
import Footer from "./Components/Footer";
import PreguntasFrecuentes from "./Pages/PreguntasFrecuentes";
import Institucional from "./Pages/Institucional";
import ProductosYservicios from "./Pages/ProductosYservicios";
import CanalesDeAtencion from "./Pages/CanalesDeAtencion";
import UniteASaintPatrick from "./Pages/UniteASaintPatrick";
import Navbar from "./Components/Navbar";
import SolicitaTuTarjeta from "./Pages/SolicitaTuTarjeta"
import { TransfTarjeta1 } from "./Pages/tranfTarjeta1";
import { TransfTarjeta2 } from "./Pages/TranfTarjeta2";
import { TransfRealizada } from "./Pages/TransfRealizada";
import { IniciarSesion } from "./Pages/IniciarSesion";
import { NavbarSesion } from "./Components/NavbarSesion";


function App() {
  const [login, setLogin] = useState("");
  console.log(login);

  const handleLogout = () => {
    setLogin("");
  };

  return (
    <BrowserRouter>
      {login ? (
        <>
          <NavbarSesion login={login} onLogout={handleLogout} />

          <Routes>
            <Route path="/Login" element={<HomeTarjetas login={login} />} />
            <Route path="/homeTarjetas" element={<HomeTarjetas login={login} />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/flujos-movimientos" element={<FlujosMovimientos />} />
            <Route path="/transferir" element={<Transferir login={login} />} />
            <Route path="/transfTarjeta1" element={<TransfTarjeta1 login={login} />} />
            <Route path="/transfTarjeta2" element={<TransfTarjeta2 login={login} />} />
            <Route path="/transfRealizada" element={<TransfRealizada />} />
            <Route path="/iniciarSesion" element={<IniciarSesion />} />
          </Routes>

        </>

      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login setLogin={setLogin} />} />

            <Route path="/Registrarse" element={<Registrarse />} />
            <Route path="/beneficios" element={<Beneficios />} />
            {/*} <Route path="/Login" element={<Login setLogin={setLogin} />} />*/}
            <Route path="/Registrarse" element={<Registrarse />} />
            <Route path="/Beneficios" element={<Beneficios />} />
            <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
            <Route path="/Institucional" element={<Institucional />} />
            <Route path="/Productosyservicios" element={<ProductosYservicios />} />
            <Route path="/CanalesDeAtencion" element={<CanalesDeAtencion />} />
            <Route path="/UniteASaintPatrick" element={<UniteASaintPatrick />} />
            <Route path="/SolicitaTuTarjeta" element={<SolicitaTuTarjeta />} />
          </Routes>

        </>


      )

      }



      <Footer />
    </BrowserRouter>
  );
}

export default App;
