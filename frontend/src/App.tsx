import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesSection from "./components/ServicesSection";
import TopTechniciansSection from "./components/TopTechniciansSection";


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
    </BrowserRouter>

  );
}

export default App;