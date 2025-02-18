import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//IMPORTAR COMPONENTES
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import HorariosPrecios from './components/HorariosPrecios';
import Galeria from './components/Galeria';
import Eventos from './components/Eventos';
import Niveles from './components/Niveles';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/horarios-precios" element={<HorariosPrecios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/niveles" element={<Niveles />} />



        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
