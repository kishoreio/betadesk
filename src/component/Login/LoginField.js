import React from "react";

const LoginField = ({ value, type, placeholder, func }) => {
  return (
    <>
      <label className="label">{`${type[0].toUpperCase()}${type.slice(1)}`}</label>
      <input
        type={type}
        value={value}
        name={type}
        onChange={func}
        placeholder={placeholder}
        required
        className="login-input"
      />
    </>
  );
};

export default LoginField;
