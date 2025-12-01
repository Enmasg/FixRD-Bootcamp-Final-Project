import "../styles/requests.css";

const mockRequests = [
  {
    id: 1,
    client: "María Santos",
    avatar: "https://i.pravatar.cc/100?img=47",
    location: "Piantini, Santo Domingo",
    description:
      "Need electrical panel upgrade and breaker replacement. House experiencing frequent power trips.",
    time: "Tomorrow, 2:00 PM",
    tag: "Urgent",
    priceRange: "RD$3,500 - 5,000",
  },
  {
    id: 2,
    client: "Roberto Jiménez",
    avatar: "https://i.pravatar.cc/100?img=12",
    location: "Gazcue, Santo Domingo",
    description:
      "Install ceiling fan and additional outlets in living room. Simple residential work.",
    time: "Dec 22, 10:00 AM",
    tag: "Standard",
    priceRange: "RD$1,800 - 2,500",
  },
  {
    id: 3,
    client: "Ana Rodríguez",
    avatar: "https://i.pravatar.cc/100?img=22",
    location: "Naco, Santo Domingo",
    description:
      "Lighting issues in kitchen and bathroom. Flickering lights intermittently.",
    time: "Dec 23, 3:00 PM",
    tag: "Standard",
    priceRange: "RD$1,200 - 2,000",
  },
];

export default function TechnicianRequests() {
  return (
    <section className="requests">

      <h2 className="requests-title">Service Requests Dashboard</h2>

      <div className="requests-header">
        <span>🟢 New Requests</span>
        <span className="count">{mockRequests.length}</span>
      </div>

      {mockRequests.map(req => (
        <div key={req.id} className="request-card">
          
          <div className="client-info">
            <img src={req.avatar} className="client-avatar" />
            <div>
              <h3>{req.client}</h3>
              <p className="location">📍 {req.location}</p>
            </div>
          </div>

          <p className="description">{req.description}</p>

          <div className="request-meta">
            <span className="time">🗓 {req.time}</span>
            <span className={`tag ${req.tag.toLowerCase()}`}>{req.tag}</span>
          </div>

          <div className="request-footer">
            <button className="accept">✔ Aceptar</button>
            <button className="reject">✖ Rechazar</button>
            <span className="price">{req.priceRange}</span>
          </div>

        </div>
      ))}

    </section>
  );
}

export interface RequestItem {
  id: string;
  clientName: string;
  location: string;
  description: string;
  date: string;
  priceRange: string;
  avatar: string;
  priority: "Urgent" | "Standard";
}