import React from "react";
import { FiLogOut } from "react-icons/fi";
import "./navbar.css";
import Button from "../CommonComponents/Button";

const NavBar = ({ isLogged, changeLoginStatus }) => {
  return (
    <section className="nav-container">
      <h1>Hi Kishore, Welcome to BetaDesk</h1>
      {isLogged ? (
        <div className="nav-container-logout">
          <FiLogOut color="#183247" />
          <Button value="LogOut" className="logout-btn" func={changeLoginStatus} />
        </div>
      ) : null}
    </section>
  );
};

export default NavBar;
