import ComoFunciona from "../components/ComoFunciona";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import ServicesSection from "../components/ServicesSection";
import TopTechniciansSection from "../components/TopTechniciansSection";
import UneteTecnico from "../components/UneteTecnico";


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
      <FAQ />
      <UneteTecnico />
    </>
  );
};

export default Home;