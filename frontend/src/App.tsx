import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesSection from "./components/ServicesSection";
import TopTechniciansSection from "./components/TopTechniciansSection";
import ComoFunciona from "./components/ComoFunciona";
import UneteTecnico from "./components/UneteTecnico";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <main className="home-main">
        <ServicesSection />
        <TopTechniciansSection />
      </main>

      <ComoFunciona />
      <FAQ />
      <UneteTecnico/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
