import React from "react";

const TicketField = ({ field, value, func }) => {
  return (
    <div className="create_ticket-field">
      <label htmlFor={field}>{`${field[0].toUpperCase()}${field.slice(1)}`}</label>
      <input
        type="text"
        id={field}
        name={field}
        value={value}
        className="default-css ticket-field"
        required
        onChange={func}
      />
    </div>
  );
};

export default TicketField;
