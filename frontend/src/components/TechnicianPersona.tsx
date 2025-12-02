import "../styles/persona.css";

export default function TechnicianPersona() {
  return (
    <section className="persona">
      <h2 className="title">Technician Persona</h2>

      <div className="persona-card">
        <img src="https://i.pravatar.cc/150?img=14" className="persona-avatar" />

        <div className="persona-info">
          <p><strong>Full Name:</strong> Carlos Méndez Rivera</p>
          <p><strong>Occupation:</strong> Licensed Electrician</p>
          <p><strong>Experience:</strong> 12 Years</p>
          <p><strong>City:</strong> Santo Domingo, RD</p>
        </div>

        <div className="persona-skills">
          <span>Wiring</span>
          <span>Commercial Systems</span>
          <span>Panel Upgrades</span>
          <span>Certified Electrician</span>
        </div>
      </div>
    </section>
  );
}
