import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesSection from "./components/ServicesSection";
import TopTechniciansSection from "./components/TopTechniciansSection";
import ComoFunciona from "./components/ComoFunciona";
import UneteTecnico from "./components/UneteTecnico";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import TecnicoTarjeta from "./pages/catalogo";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<TecnicoTarjeta/>}/>
      </Routes>


    
      <Footer />
   </BrowserRouter>
  );
}

export default App;
