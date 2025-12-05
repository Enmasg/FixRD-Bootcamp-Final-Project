import React from "react";
import "./PerfilCliente.css";
import profile from "../assets/Images-Cliente/foto.jpg";

const PerfilCliente = () => {
  return (
    <div    className="body">
      {/* Persona Section */}
      <section
        className="persona-section"
        aria-labelledby="persona-heading"
      >
        <div className="persona-container">
          <div className="persona-left">
            {/* Use /images/... from public/ or replace with imports */}
            <img
              src={profile}
              className="persona-photo"
              alt="Foto de María González"
            />

            <h2 id="persona-heading" className="persona-name">
              María González
            </h2>
            <p className="persona-info">32 años • Marketing Manager</p>
            <p className="persona-location">Santo Domingo, RD</p>

            <div className="persona-card" aria-hidden={false}>
              <h3>
                <span aria-hidden>💻</span> Digital Proficiency
              </h3>
              <p>Alto - Usa tecnología diariamente</p>
            </div>
          </div>

          <div className="persona-right">
            <div className="persona-card">
              <h3>🎯 Objetivos</h3>
              <ul>
                <li>Encontrar técnicos confiables rápidamente</li>
                <li>Resolver problemas del hogar sin estrés</li>
                <li>Obtener servicios de calidad</li>
              </ul>
            </div>

            <div className="persona-card">
              <h3>⚠️ Frustraciones</h3>
              <ul>
                <li>Técnicos no confiables</li>
                <li>Precios poco transparentes</li>
                <li>Falta de disponibilidad</li>
              </ul>
            </div>

            <div className="persona-card">
              <h3>❤️ Motivaciones</h3>
              <ul>
                <li>Mantener su hogar en perfecto estado</li>
                <li>Ahorrar tiempo en búsquedas</li>
                <li>Evitar estrés innecesario</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Wrap */}
      <section className="wrap" aria-labelledby="dashboard-heading">
        <div className="grid-top">
          {/* Left column */}
          <div className="col left-col">
            <div className="card profile" aria-labelledby="profile-name">
              <img
                className="avatar"
                src={profile}
                alt="Avatar María González"
              />
              <h3 id="profile-name">María González</h3>
              <p className="muted">Santo Domingo, RD</p>
              <button className="btn" type="button">
                Editar Perfil
              </button>
            </div>

            <div className="card notifications" aria-labelledby="noti-heading">
              <h4 id="noti-heading">Notificaciones</h4>

              <div className="notify-row">
                <span>Email</span>
                <label className="swich" aria-label="Email notifications">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
              </div>

              <div className="notify-row">
                <span>SMS</span>
                <label className="swich" aria-label="SMS notifications">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
              </div>

              <div className="notify-row">
                <span>Push</span>
                <label className="swich" aria-label="Push notifications">
                  <input type="checkbox" defaultChecked />
                  <span className="slider" />
                </label>
              </div>
            </div>
          </div>

          {/* Center column */}
          <div className="col center-col">
            <div className="card activity" aria-labelledby="activity-heading">
              <h4 id="activity-heading">Mi Actividad</h4>

              <div className="task">
                <div>
                  <strong>Reparación de Aire Acondicionado</strong>
                  <div className="muted small">28/11/2025</div>
                </div>
              </div>

              <div className="task">
                <div>
                  <strong>Instalación Lámpara</strong>
                  <div className="muted small">28 Nov 2025</div>
                </div>
              </div>

              <div className="task">
                <div>
                  <strong>Reparación Plomería</strong>

                  <div className="muted small">8 Nov 2024</div>
                </div>
              </div>
            </div>
          </div>
          {/*       <span className="badge blue" aria-hidden>
                  Completado
                </span>*/}
          {/* Right column */}
          <div className="col right-col">
            <div className="card small">
              <h4>Historial de Servicios</h4>
              <ul className="history">
                <li>
                  <strong>Carlos Martínez</strong>
                  <span className="muted small">Nov 28</span>
                  <br />
                  <span className="muted">Plomería</span>
                </li>
                <li>
                  <strong>Ana Rodríguez</strong>
                  <span className="muted small">Oct 25</span>
                  <br />
                  <span className="muted">Electricidad</span>
                </li>
                <li>
                  <strong>Luis Fernández</strong>
                  <span className="muted small">Oct 15</span>
                  <br />
                  <span className="muted">Carpintería</span>
                </li>
              </ul>
            </div>

            <div className="card small">
              <h4>Reseñas Escritas</h4>
              <p className="muted">Has escrito 3 reseñas</p>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Ver todas
              </a>
            </div>

            <div className="small actions card">
              <ul className="action-list">
                <li>⚙️ Configuración de Cuenta</li>
                <li>🧭 Preferencias</li>
                <li className="danger">⎋ Cerrar Sesión</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical info */}
        <section className="technical card big" aria-labelledby="tech-heading">
          <h3 id="tech-heading">Información Técnica del Perfil</h3>

          <div className="tech-grid">
            <div className="info-card">
              <h5>Información Personal</h5>
              <p>
                <strong>Nombre:</strong> María González
              </p>
              <p>
                <strong>Teléfono:</strong> +1 (945) 555-0123
              </p>
              <p>
                <strong>Email:</strong> maria@email.com
              </p>
              <p>
                <strong>Ubicación:</strong> Santo Domingo, RD
              </p>
            </div>

            <div className="info-card">
              <h5>Configuración de Cuenta</h5>
              <p>
                <strong>Contraseña:</strong> ••••••••
              </p>
              <p>
                <strong>Verificación:</strong> ✓ Verificado
              </p>
              <p>
                <strong>Idioma:</strong> Español
              </p>
            </div>

            <div className="info-card">
              <h5>Soluciones Activas</h5>
              <p>2 soluciones en proceso</p>
            </div>

            <div className="info-card">
              <h5>Historial de Servicios</h5>
              <p>15 servicios completados</p>
              <p>Calificación promedio: 4.8/5</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PerfilCliente;
