import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<div className="text-center font-bold text-5xl mt-10 text-red-600">Home</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


