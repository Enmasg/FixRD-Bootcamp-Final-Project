import React from "react";
import logo from "../assets/images/LOGO-fixrd.png";
import "./Header.css"; 
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
    <header className="header">
      <div className="logo-nav">
        <img src={logo} width={150} height={150} />
      </div>

  <nav className="nav-sticky-list">
  <ul className="list-item">
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#acerca">Acerca</a></li>
    <li><a href="#servicios">Servicios</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>

      <div className="btns-header">
       <button className="btn-login"  onClick={( ) => navigate ("/login") } > Sesión Cliente</button>
        <button className="register" onClick={() => navigate("/register")}>Iniciar Sesión Técnico</button>
      </div>
    </header>
    </div>
  );
};

export default Header;
