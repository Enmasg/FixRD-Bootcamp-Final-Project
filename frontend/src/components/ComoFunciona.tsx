import "./ComoFunciona.css";

const ComoFunciona = () => {
  return (
    <>
      {/* SECCION MELANIE */}

      {/* Cómo funciona */}

      <section className="how-it-works">
        <h2>Cómo Funciona</h2>

        <p>
          Obtener ayuda profesional nunca ha sido tan fácil. Sigue estos simples
          pasos para conectarte con técnicos calificados en tu área.
        </p>

        <div className="steps">
          <div className="step">
            <div className="circle">1</div>
            <h3>Buscar y Filtrar</h3>
            <p>
              Usa nuestra búsqueda avanzada para encontrar técnicos por tipo de
              servicio, ubicación, disponibilidad y valoraciones.
            </p>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <h3>Comparar Perfiles</h3>
            <p>
              Revisa perfiles detallados, certificaciones y precios para elegir
              al técnico perfecto para tus necesidades.
            </p>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <h3>Reservar Servicio</h3>
            <p>
              Programa tu cita con unos pocos clics. Elige la fecha, hora y
              describe tus requerimientos.
            </p>
          </div>

          <div className="step">
            <div className="circle">4</div>
            <h3>Listo, ¡Se Arregló!</h3>
            <p>
              Relájate mientras nuestro profesional certificado se encarga de tu
              reparación o mantenimiento de forma eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials">
        <h2>Opiniones de Clientes</h2>
        <p>
          Lo que dicen nuestros clientes sobre nuestro servicio profesional y
          confiable.
        </p>

        <div className="testimonial-cards">
          <div className="testimonial">
            <div className="rating">★★★★★</div>
            <p>
              "Excelente servicio, rápido y muy profesional. Recomiendo
              totalmente."
            </p>
            <h3>Juan Pérez</h3>
          </div>

          <div className="testimonial">
            <div className="rating">★★★★☆</div>
            <p>
              "Muy buena atención, resolvieron mi problema en tiempo récord."
            </p>
            <h3>María López</h3>
          </div>

          <div className="testimonial">
            <div className="rating">★★★★★</div>
            <p>
              "Servicio impecable y confiable. Los técnicos fueron muy amables."
            </p>
            <h3>Carlos Martínez</h3>
          </div>
        </div>
      </section>
    </>
    // FIN SECCION MELANIE
  );
};

export default ComoFunciona;
