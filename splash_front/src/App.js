import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//IMPORTAR COMPONENTES
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import HorariosPrecios from './components/HorariosPrecios';
import Galeria from './components/Galeria';
import Eventos from './components/Eventos';
import Niveles from './components/Niveles/Niveles';
import PrincipianteA from './components/Niveles/PrincipianteA';
import PrincipianteB from './components/Niveles/PrincipianteB';
import IntermedioA from './components/Niveles/IntermedioA';
import IntermedioB from './components/Niveles/IntermedioB';
import Avanzados from './components/Niveles/Avanzados';
import Matro from './components/Niveles/Matroclase';
import Personalizada from './components/Niveles/Personalizada';

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
        <Route path="/niveles/principianteA" element={<PrincipianteA />} />
        <Route path="/niveles/principianteB" element={<PrincipianteB />} />
        <Route path="/niveles/intermedioA" element={<IntermedioA />} />
        <Route path="/niveles/intermedioB" element={<IntermedioB />} />
        <Route path="/niveles/avanzados" element={<Avanzados />} />
        <Route path="/niveles/matro" element={<Matro />} />
        <Route path="/niveles/personalizada" element={<Personalizada />} />


      </Routes>

      <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
