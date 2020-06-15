import React, { useState } from "react";
import LoginField from "./LoginField";
import Button from "../CommonComponents/Button";
import logo from "../../resources/logo.png";
import "./login.css";

const Login = ({ changeLoginStatus }) => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const getLoginDetails = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [key]: value });
  };
  const validateLoginDetails = (e) => {
    e.preventDefault();
    if (login.email === "kishore@betadesk.com" && login.password === "admin") {
      changeLoginStatus();
    }
  };
  const { email, password } = login;
  return (
    <section className="login-container">
      <figure className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="line" />
        <figcaption className="logo-text">Beta Desk</figcaption>
      </figure>
      <h1 className="welcome-text">Login to your Betadesk account</h1>
      <form className="form">
        <LoginField type="email" placeholder="Enter your email" value={email} func={getLoginDetails} />
        <LoginField type="password" placeholder="Enter your password" value={password} func={getLoginDetails} />
        <Button value="Log In" className="btn-login" func={validateLoginDetails} />
      </form>
      <p className="login-demo">E-mail: kishore@betadesk.com</p>
      <p className="login-demo">Password: admin</p>
    </section>
  );
};
export default Login;
