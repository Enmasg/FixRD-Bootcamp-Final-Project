import { useNavigate } from "react-router-dom";
import "./UneteTecnico.css";

const UneteTecnico = () => {
  const navigate = useNavigate()
  return (
    <section className="hero">
      <div className="hero-container fade-in">
        <div className="hero-text slide-up">
          <h1 className="hero-title">Únete como Técnico</h1>
          <p className="hero-description">
            Conviértete en parte de nuestro equipo y ofrece tus servicios profesionales a cientos de clientes.
          </p>
        </div>

        <div className="hero-actions slide-up">
           
          <button className="btn hero-btn" onClick={() => navigate("/register")}>Comenzar</button>
        </div>
      </div>
    </section>
  );
};

export default UneteTecnico;