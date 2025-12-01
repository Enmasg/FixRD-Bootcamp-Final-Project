// ------------------------ricky---------------------------
// Panel de solicitudes nuevas para el técnico
// Ahora mismo usa datos de ejemplo (mock)
// Luego se conectará al backend /api/requests

import React, { useState /*, useEffect*/ } from "react";
import "../styles/requests.css";

type RequestItem = {
  id: string;
  clientName: string;
  location: string;
  description: string;
  date: string;
  priceRange: string;
  avatar: string;
  priority: "Urgent" | "Standard";
};

// Datos de prueba mientras se conecta la API
const mockRequests: RequestItem[] = [
  {
    id: "req1",
    clientName: "María Santos",
    location: "Piantini, Santo Domingo",
    description:
      "Actualización eléctrica y reemplazo de breaker. La casa presenta apagones frecuentes.",
    date: "Mañana, 2:00 PM",
    priceRange: "RD$3,500 - 5,000",
    avatar: "https://i.pravatar.cc/150?img=50",
    priority: "Urgent",
  },
  {
    id: "req2",
    clientName: "Roberto Jiménez",
    location: "Gazcue, Santo Domingo",
    description:
      "Instalación de abanico de techo y tomacorrientes adicionales en sala.",
    date: "22 Dic, 10:00 AM",
    priceRange: "RD$1,800 - 2,500",
    avatar: "https://i.pravatar.cc/150?img=45",
    priority: "Standard",
  },
  {
    id: "req3",
    clientName: "Ana Rodríguez",
    location: "Naco, Santo Domingo",
    description:
      "Problemas eléctricos en cocina y baño. Luces parpadeando intermitentemente.",
    date: "23 Dic, 3:00 PM",
    priceRange: "RD$1,200 - 2,000",
    avatar: "https://i.pravatar.cc/150?img=32",
    priority: "Standard",
  },
];

const RequestsDashboard: React.FC = () => {
  const [requests, setRequests] = useState<RequestItem[]>(mockRequests);

  // 🔌 Aquí luego se conecta al backend:
  /*
  useEffect(() => {
    fetch("/api/requests?technicianId=ID_DEL_TECNICO")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((err) => console.error("Error cargando solicitudes:", err));
  }, []);
  */

  const handleAccept = (id: string) => {
    // Aquí luego llamamos al backend: PUT /api/requests/:id
    console.log("Aceptar solicitud:", id);
  };

  const handleReject = (id: string) => {
    // Aquí luego llamamos al backend: PUT /api/requests/:id
    console.log("Rechazar solicitud:", id);
  };

  return (
    <div className="requests-container">
      <div className="requests-header">
        <h2 className="requests-title">Solicitudes nuevas</h2>
        <span className="requests-count">{requests.length} activas</span>
      </div>

      {requests.map((req) => (
        <div className="request-card" key={req.id}>
          {/* Avatar */}
          <div className="request-avatar">
            <img src={req.avatar} alt={req.clientName} />
          </div>

          {/* Info */}
          <div className="request-info">
            <div className="request-top">
              <div>
                <h3 className="client-name">{req.clientName}</h3>
                <p className="location">{req.location}</p>
              </div>

              <span
                className={`priority ${
                  req.priority === "Urgent" ? "urgent" : "standard"
                }`}
              >
                {req.priority === "Urgent" ? "Urgente" : "Estandar"}
              </span>
            </div>

            <p className="desc">{req.description}</p>

            <div className="request-details">
              <span className="date">📅 {req.date}</span>
              <span className="price">💰 {req.priceRange}</span>
            </div>

            <div className="request-actions">
              <button className="btn-accept" onClick={() => handleAccept(req.id)}>
                Aceptar
              </button>
              <button className="btn-reject" onClick={() => handleReject(req.id)}>
                Rechazar
              </button>
            </div>
          </div>
        </div>
      ))}

      {requests.length === 0 && (
        <p className="no-requests">No tienes solicitudes nuevas por el momento.</p>
      )}
    </div>
  );
};

export default RequestsDashboard;
