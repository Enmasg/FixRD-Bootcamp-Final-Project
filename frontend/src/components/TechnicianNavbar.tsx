import React from "react";
import "../styles/navbar.css";

const TechnicianNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="nav-logo">FixRD</h2>
      </div>

      <div className="nav-right">
        <a>Inicio</a>
        <a>Mis Solicitudes</a>
        <a>Mi Perfil</a>
        <button className="logout-btn">Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default TechnicianNavbar;   // 👈 IMPORTANTE
