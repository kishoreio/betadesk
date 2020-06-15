import React from "react";
import { Link } from "react-router-dom";
import { RiDashboardLine, RiFolder2Line, RiMailAddLine } from "react-icons/ri";
import logo from "../../resources/logo-small.png";
import "./sidePanel.css";

const SidePanel = () => {
  return (
    <section className="side_panel-container">
      <img src={logo} alt="logo" className="side_panel-logo" />
      <div className="side_panel-icons">
        <Link to="/dashboard/overview">
          <div className="side_panel-icon">
            <RiDashboardLine size="1.5rem" color="white" opacity="0.5" />
            <p>OverView</p>
          </div>
        </Link>
        <Link to="/dashboard/create-tickets">
          <div className="side_panel-icon">
            <RiMailAddLine size="1.5rem" color="white" opacity="0.5" />
            <p>Create Ticket</p>
          </div>
        </Link>
        <Link to="/dashboard/tickets">
          <div className="side_panel-icon">
            <RiFolder2Line size="1.5rem" color="white" opacity="0.5" />
            <p>View Tickets</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SidePanel;
