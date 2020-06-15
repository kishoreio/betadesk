import React from "react";
import { Redirect, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SidePanel from "../SidePanel/SidePanel";
import ViewPort from "../ViewPort/ViewPort";
import ViewTicket from "../ViewTicket/ViewTicket";
import TicketList from "../TicketList/TicketList";
import CreateTicket from "../CreateTicket/CreateTicket";
import OverView from "../OverView/OverView";
import "./dashboard.css";

const DashBoard = ({ isLogged, changeLoginStatus }) => {
  if (!isLogged) {
    return <Redirect to="/" />;
  }
  return (
    <main className="dashboard-container">
      <NavBar isLogged={isLogged} changeLoginStatus={changeLoginStatus} />
      <section className="split-view">
        <SidePanel />
        <Route path="/dashboard/overview">
          <ViewPort>
            <OverView />
          </ViewPort>
        </Route>
        <Route path="/dashboard/create-tickets">
          <ViewPort>
            <CreateTicket />
          </ViewPort>
        </Route>
        <Route path="/dashboard/tickets">
          <ViewPort>
            <TicketList />
          </ViewPort>
        </Route>
        <Route path="/dashboard/view-ticket">
          <ViewPort>
            <ViewTicket />
          </ViewPort>
        </Route>
      </section>
    </main>
  );
};

export default DashBoard;
