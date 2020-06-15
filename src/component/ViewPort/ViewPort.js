import React from "react";
import "./viewport.css";

const ViewPort = (props) => {
  return <main className="viewport-container">{props.children}</main>;
};

export default ViewPort;
