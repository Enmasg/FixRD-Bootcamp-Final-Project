import "../styles/flow.css";

export default function TechnicianUserFlow() {
  return (
    <section className="flow">
      <h2 className="flow-title">Technician User Flow</h2>

      <div className="flow-steps">

        <div className="flow-card">
          <div className="flow-icon">➡️</div>
          <h3>Login to FixRD</h3>
          <p>Technician authenticates and accesses dashboard.</p>
        </div>

        <div className="flow-arrow">⬇</div>

        <div className="flow-card">
          <div className="flow-icon">📋</div>
          <h3>View New Service Requests</h3>
          <p>Browse available jobs in service area.</p>
        </div>

        <div className="flow-arrow">⬇</div>

        <div className="flow-card">
          <div className="flow-icon">ℹ️</div>
          <h3>Check Request Details</h3>
          <p>Review description, location, time and client info.</p>
        </div>

        <div className="flow-arrow">⬇</div>

        <div className="flow-card">
          <div className="flow-icon">✔️</div>
          <h3>Accept or Reject Request</h3>
          <p>Decide based on availability and job details.</p>
        </div>

        <div className="flow-arrow">⬇</div>

        <div className="flow-card">
          <div className="flow-icon">💬</div>
          <h3>Communicate with Client</h3>
          <p>Clarify details and confirm arrival time.</p>
        </div>

        <div className="flow-arrow">⬇</div>

        <div className="flow-card">
          <div className="flow-icon">🛠️</div>
          <h3>Complete the Service</h3>
          <p>Perform work according to specifications.</p>
        </div>

        <div className="flow-arrow">⬇</div>

        <div className="flow-card">
          <div className="flow-icon">⭐</div>
          <h3>Receive Rating & Review</h3>
          <p>Client gives feedback based on service quality.</p>
        </div>

        <div className="flow-arrow">⬇</div>

        <div className="flow-card">
          <div className="flow-icon">⚙️</div>
          <h3>Update Profile & Availability</h3>
          <p>Adjust pricing, services, and schedule.</p>
        </div>

      </div>
    </section>
  );
}
