import React, { useState } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./component/Login/Login";
import DashBoard from "./component/DashBoard/DashBoard";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const changeLoginStatus = () => {
    setIsLogged(!isLogged);
  };
  return (
    <Router>
      <Route exact path="/">
        {isLogged ? <Redirect to="/dashboard/overview" /> : <Login changeLoginStatus={changeLoginStatus} />}
      </Route>
      <Route path="/dashboard">
        <DashBoard isLogged={isLogged} changeLoginStatus={changeLoginStatus} />
      </Route>
    </Router>
  );
};

export default App;
