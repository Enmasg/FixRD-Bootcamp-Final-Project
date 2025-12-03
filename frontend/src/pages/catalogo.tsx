import React, { useState } from "react";
import "./catalogo.css";
import zoro from "../assets/images/zoro.png";
import purpura from "../assets/images/purpura.png";
import blanco from "../assets/images/blanco.png";
import azulmujer from "../assets/images/azulmujer.png";
import rosado from "../assets/images/rosado.png";
import LOGO from "../assets/images/logo fixrd.png";
import Luffy from "../assets/images/luffy.png"


const tecnicos = [
   { nombre: "Luffy Rodriguez", servicio: "Reparación de Electrodomesticos", ubicacion: "Puerto Plata", experiencia: 2, estrellas: 5, foto: Luffy },
  { nombre: "Zoro Almonte", servicio: "Electricidad", ubicacion: "Santo Domingo", experiencia: 5, estrellas: 5, foto: zoro },
  { nombre: "Ricky Ricon", servicio: "Plomería", ubicacion: "Santiago", experiencia: 3, estrellas: 4, foto: purpura },
  { nombre: "Luis Martínez", servicio: "Reparación de Electrodomesticos", ubicacion: "La Vega", experiencia: 7, estrellas: 3, foto: blanco },
  { nombre: "María López", servicio: "Refrigeración y Climatización", ubicacion: "Puerto Plata", experiencia: 4, estrellas: 3, foto: azulmujer },
  { nombre: "Carlos Díaz", servicio: "Plomería", ubicacion: "San Cristóbal", experiencia: 6, estrellas: 4, foto: purpura },
  { nombre: "Sofía Hernández", servicio: "Electricidad", ubicacion: "Santo Domingo", experiencia: 2, estrellas: 2, foto: rosado },
];

const TecnicoTarjeta = () => {
  const [filtroServicio, setFiltroServicio] = useState("");
  const [filtroUbicacion, setFiltroUbicacion] = useState("");
  const [filtroExperiencia, setFiltroExperiencia] = useState("");
  const [filtroEstrellas, setFiltroEstrellas] = useState("");

  const tecnicosFiltrados = tecnicos.filter(tec => {
    return (
      (filtroServicio === "" || tec.servicio === filtroServicio) &&
      (filtroUbicacion === "" || tec.ubicacion.toLowerCase().includes(filtroUbicacion.toLowerCase())) &&
      (filtroExperiencia === "" || tec.experiencia >= parseInt(filtroExperiencia)) &&
      (filtroEstrellas === "" || tec.estrellas >= parseInt(filtroEstrellas))
    );
  });

  return (
    <div className="container">

      <header className="header">
        <img src={LOGO} alt="Logo Empresa" className="header-logo" />
      </header>

      <div className="main-container">
        <aside className="sidebar-filter">
          <h3>Filtros</h3>

          <div className="filter-group">
            <label>Servicio:</label>
            <select value={filtroServicio} onChange={e => setFiltroServicio(e.target.value)}>
              <option value="">Todos</option>
              <option value="Electricidad">Electricidad</option>
              <option value="Plomería">Plomería</option>
              <option value="Reparación de Electrodomesticos">Reparación de Electrodomésticos</option>
              <option value="Refrigeración y Climatización">Refrigeración y Climatización</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Ubicación:</label>
            <input
              type="text"
              value={filtroUbicacion}
              onChange={e => setFiltroUbicacion(e.target.value)}
              placeholder="Ej: Santo Domingo"
            />
          </div>

          <div className="filter-group">
            <label>Experiencia mínima (años):</label>
            <input
              type="number"
              value={filtroExperiencia}
              onChange={e => setFiltroExperiencia(e.target.value)}
              placeholder="Ej: 3"
              min="0"
            />
          </div>

          <div className="filter-group">
            <label>Estrellas mínimas:</label>
            <select value={filtroEstrellas} onChange={e => setFiltroEstrellas(e.target.value)}>
              <option value="">Seleccione</option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </aside>

        <div className="cards-container">
          {tecnicosFiltrados.map((tec, index) => (
            <div className="profile-card" key={index}>
              <div className="profile-image">
                <img src={tec.foto} alt={tec.nombre} />
              </div>
              <h3 className="profile-name">{tec.nombre}</h3>
              <p className="profile-info"><strong>Servicio:</strong> {tec.servicio}</p>
              <p className="profile-info"><strong>Ubicación:</strong> {tec.ubicacion}</p>
              <p className="profile-info"><strong>Experiencia:</strong> {tec.experiencia} años</p>
              <p className="profile-info"><strong>Estrellas:</strong> {"⭐".repeat(tec.estrellas)}</p>
              <button className="profile-btn">Ver Perfil</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TecnicoTarjeta;