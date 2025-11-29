import "../styles/sidebar.css";

export default function TechnicianSidebar() {
  return (
    <aside className="sidebar">

      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/150?img=14"
          className="profile-avatar"
        />

        <h3 className="profile-name">Carlos Méndez Rivera</h3>
        <p className="profile-role">Electricista Certificado</p>

        <span className="profile-status">Disponible Hoy</span>

        <div className="certs">
          <span>Licensed Pro</span>
          <span>Insured</span>
          <span>Top Rated</span>
        </div>

        <button className="profile-btn">Editar Perfil</button>
      </div>

      <div className="toggles">
        <h4>Estado de disponibilidad</h4>
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>

        <h4>Notificaciones</h4>

        <div className="notif-item">
          <span>Nuevas Solicitudes</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>

        <div className="notif-item">
          <span>Mensajes</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>

        <div className="notif-item">
          <span>Reseñas</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>
      </div>

    </aside>
  );
}
