import "./AcercaDe.css";
import TecnicosImg from "../assets/images/grupo-de-técnicos-confianza-en-equipo-trabajadores-una-fábrica-industrial-la-feliz-mantenimiento-y-ingenieros-retrato-272397872.jpg";

const AcercaDe = () => {
  return (
    <>
    

      <section className="about-fixrd">
        <div className="about-content">
          <h2>Acerca de FixRD</h2>

          <p className="about-text">
            Fundada en 2020, FixRD nació de una idea sencilla: conectar técnicos
            calificados con personas que necesitan reparaciones confiables en el
            hogar y negocios. Creemos que todos merecen acceso a servicios de
            calidad y a precios justos.
          </p>

          <ul className="about-features">
            <li>
              ✔ <strong>Profesionales Verificados</strong> – Cada técnico pasa
              por verificación de antecedentes, validación de licencias y
              evaluación de habilidades antes de unirse a la plataforma.
            </li>

            <li>
              ✔ <strong>Precios Justos</strong> – Tarifas transparentes sin
              cargos ocultos. Compara cotizaciones y elige el servicio que mejor
              se ajuste a tu presupuesto.
            </li>

            <li>
              ✔ <strong>Respuesta Rápida</strong> – La mayoría de las
              solicitudes reciben respuesta en menos de 30 minutos. Servicios de
              emergencia disponibles 24/7.
            </li>
          </ul>

          <div className="about-buttons">
            <button className="story-btn">Nuestra Historia</button>
            <button className="contact-btn">Contáctanos</button>
          </div>
        </div>

        <div className="about-image">
          <img src={TecnicosImg} alt="Técnicos trabajando" /> 
          <div className="badge rating-badge">
            ⭐ 4.9 Valoración de Clientes
          </div>
          <div className="badge industry-badge">
            Líder en la Industria – Con la confianza de más de 50,000 clientes
          </div>
        </div>
      </section>
    </>
    // FIN SECCION enmanuel
  );
};

export default AcercaDe;
