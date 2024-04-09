import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import Beneficios from "./Pages/Beneficios";
import { Login } from './Pages/Login';
import { Registrarse } from "./Pages/Registrarse";
import { useState } from "react";
import { HomeTarjetas } from "./Pages/HomeTarjetas";



const RenderNavbar = ({ login, onLogout }) => {
  const navigate = useNavigate();


  const shouldRenderNavbar = !['/Registrarse', '/Login'].includes(window.location.pathname);

  return shouldRenderNavbar ? <Navbar login={login} onLogout={onLogout} /> : null;
};

function App() {

  const [login, setLogin] = useState('');
  console.log(login);

  const handleLogout = () => {

    setLogin('');
  };

  return (
    <BrowserRouter>
      <RenderNavbar login={login} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login setLogin={setLogin} />} />
        <Route path="/HomeTarjetas" element={<HomeTarjetas />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/beneficios" element={<Beneficios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


