import TechnicianLayout from "../components/TechnicianLayout";
import TechnicianPersona from "../components/TechnicianPersona";
import TechnicianUserFlow from "../components/TechnicianUserFlow";
import TechnicianRequests from "../components/TechnicianRequests";

export default function TechnicianDashboard() {
  return (
    <TechnicianLayout>
      <TechnicianPersona />
      <TechnicianUserFlow />
      <TechnicianRequests />
    </TechnicianLayout>
  );
}
