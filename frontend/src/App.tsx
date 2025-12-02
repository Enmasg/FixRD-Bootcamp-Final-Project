import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesSection from "./components/ServicesSection";
import TopTechniciansSection from "./components/TopTechniciansSection";
import ComoFunciona from "./components/ComoFunciona";
import UneteTecnico from "./components/UneteTecnico";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import TecnicoTarjeta from "./pages/catalogo";
import PerfilCliente from "./pages/PerfilCliente";

import TechnicianDashboard from "./pages/TechnicianDashboard";
import LoginRegistro from "./pages/LoginRegistro";
import TecnicoRegistro from "./pages/TecnicoRegistro";
import AcercaDe from "./components/AcercaDe";

import TechnicianDashboard from "./pages/TechnicianDashboard";
import LoginRegistro from "./pages/LoginRegistro";
import TecnicoRegistro from "./pages/TecnicoRegistro";
import AcercaDe from "./components/AcercaDe";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />
        
        {/* Tecnicos del catálogo */}
        <Route path="/catalogo" element={<TecnicoTarjeta />} />

        {/* LOGIN y registro */}
        <Route path="/login" element={<LoginRegistro />} />
        <Route path="/register" element={<TecnicoRegistro />} />
        
        <Route path="/acercade" element={<AcercaDe/>}/>
        <Route path="/contacto" element={<AcercaDe/>}/>
        <Route path="/services" element={<ServicesSection/>}/>
        
        {/* Dashboard del técnico */}
        <Route path="/tecnico" element={<TechnicianDashboard />} />
<<<<<<< HEAD
      </Routes>
=======
        
      </Routes>
       <Footer/>
>>>>>>> a989a0f6fc35c83d64f0347a85463d0c70b4876a
    </BrowserRouter>
  );
}

export default App;
