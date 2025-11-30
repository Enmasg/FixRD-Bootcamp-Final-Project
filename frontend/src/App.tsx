import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesSection from "./components/ServicesSection";
import TopTechniciansSection from "./components/TopTechniciansSection";
import ComoFunciona from "./components/ComoFunciona";
import UneteTecnico from "./components/UneteTecnico";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import TecnicoTarjeta from "./pages/catalogo";
import LoginRegistro from "./pages/LoginRegistro";
import TecnicoRegistro from "./pages/TecnicoRegistro";
import AcercaDe from "./components/AcercaDe";

function App() {
  return (

    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<TecnicoTarjeta/>}/>
        <Route path="/login" element={<LoginRegistro/>}/>
        <Route path="/register" element={<TecnicoRegistro/>}/>
        <Route path="/acercade" element={<AcercaDe/>}/>
           <Route path="/contacto" element={<AcercaDe/>}/>
        <Route path="/services" element={<ServicesSection/>}/>
       
      </Routes>


    
      <Footer />
   </BrowserRouter>
  );
}

export default App;
