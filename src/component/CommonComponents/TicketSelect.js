import React from "react";

const TicketSelect = ({ field, options, value, func }) => {
  const optionArr = options.split(" ");
  return (
    <div className="create_ticket-field">
      <label htmlFor={field}>{`${field[0].toUpperCase()}${field.slice(1)}`}</label>
      <select name={field} id={field} className="default-css ticket-field" onChange={func}>
        <option disabled selected>
          {`Select a ${field}`}
        </option>
        {optionArr.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TicketSelect;
