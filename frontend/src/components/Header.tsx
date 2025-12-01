import React from "react";
import logo from "../assets/images/LOGO-fixrd.png";
import "./Header.css"; 
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <div className="logo-nav">
        <img src={logo} width={175} height={175} alt="Logo Fixrd" />
      </div>

      <nav className="nav-sticky-list">
        <ul className="list-item">
          <li><a href="/">Inicio</a></li>
          <li><a href="/acercade">Acerca</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>

      <div className="btns-header">
        <button className="btn-login" onClick={() => navigate("/login")}>
          Sesión Cliente
        </button>
        <button className="register" onClick={() => navigate("/register")}>
          Iniciar Sesión Técnico
        </button>
      </div>
    </header>
  );
};

export default Header;
