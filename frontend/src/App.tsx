import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesSection from "./components/ServicesSection";
import TopTechniciansSection from "./components/TopTechniciansSection";
import ComoFunciona from "./components/ComoFunciona";
import UneteTecnico from "./components/UneteTecnico";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import TecnicoTarjeta from "./pages/catalogo";

import TechnicianDashboard from "./pages/TechnicianDashboard";
import LoginRegistro from "./pages/LoginRegistro";
import TecnicoRegistro from "./pages/TecnicoRegistro";

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

        {/* Dashboard del técnico */}
        <Route path="/tecnico" element={<TechnicianDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
