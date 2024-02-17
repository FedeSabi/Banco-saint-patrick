import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import Beneficios from "./Pages/Beneficios";
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beneficios" element={<Beneficios/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


