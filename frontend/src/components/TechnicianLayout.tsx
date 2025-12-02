import React from "react";
import TechnicianNavbar from "./TechnicianNavbar";
import TechnicianSidebar from "./TechnicianSidebar";
import "../styles/layout.css";

interface Props {
  children: React.ReactNode;
}

const TechnicianLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <TechnicianNavbar />

      <div className="layout-container">
        <TechnicianSidebar />

        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
};

export default TechnicianLayout;
