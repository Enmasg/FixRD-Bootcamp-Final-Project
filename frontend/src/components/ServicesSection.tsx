// ------------------------ricky---------------------------*
import React from "react"; 
import { servicesMock } from "../mocks/servicesMock"; 
import { Service } from "../types"; 
import "../styles/home.css";

const ServicesSection: React.FC = () => {
  const services: Service[] = servicesMock; // Más adelante se puede cambiar a fetch API

  return (
    <section className="home-section services-section" id="services">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-title-main">Nuestros</span>{" "}
          <span className="section-title-highlight">Servicios</span>
        </h2>
        <p className="section-subtitle">
          Técnicos profesionales para cada necesidad. Desde emergencias hasta
          mantenimiento programado, te conectamos con expertos certificados.
        </p>
      </div>

      <div className="cards-grid">
        {services.map((service) => (
          <article key={service.id} className="service-card">
            <div className="service-icon">
              <span>{service.icon}</span>
            </div>
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; 
