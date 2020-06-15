import React from "react";

const Button = ({ value, className, func }) => {
  return <input type="submit" value={value} className={`default-css ${className}`} onClick={func} />;
};

export default Button;
