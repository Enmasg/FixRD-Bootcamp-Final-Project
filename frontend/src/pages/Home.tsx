
import AcercaDe from "../components/AcercaDe";
import ComoFunciona from "../components/ComoFunciona";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import ServicesSection from "../components/ServicesSection";
import TopTechniciansSection from "../components/TopTechniciansSection";
import UneteTecnico from "../components/UneteTecnico";
import TechnicianDashboard from "./TechnicianDashboard";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <SearchForm />
      <main className="home-main">
        <ServicesSection />
        <TopTechniciansSection />

      </main>

      <ComoFunciona />
      <AcercaDe />
     
      <FAQ />
      <UneteTecnico />
    </>
  );
};

export default Home;
