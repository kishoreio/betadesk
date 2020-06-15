import React, { useState, useEffect } from "react";
import Button from "../CommonComponents/Button";
import TicketField from "./TicketField";
import TicketSelect from "../CommonComponents/TicketSelect";
import postData from "../../services/postData";
import "./createticket.css";

const CreateTicket = () => {
  const [ticket, setTicket] = useState({
    name: "",
    subject: "",
    type: "",
    status: "",
    priority: "",
    department: "",
    agent: "",
    description: "",
  });
  const [post, setPost] = useState();
  useEffect(() => {
    async function execute() {
      try {
        const data = await postData(post);
        if (data.status === "success") {
          setTicket({
            name: "",
            subject: "",
            type: "",
            status: "",
            priority: "",
            department: "",
            agent: "",
            description: "",
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
    execute();
  }, [post]);
  const changeTicketState = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setTicket({ ...ticket, [key]: value });
  };
  const postTicketToServer = () => {
    const ticketNo = Math.floor(Math.random() * 10000) + 1;
    const createdAt = new Date().toLocaleDateString();
    setPost({ ...ticket, ticketNo, createdAt });
  };
  const { name, subject, type, status, priority, department, agent, description } = ticket;
  return (
    <section className="create_ticket-container">
      <TicketField field="name" value={name} func={changeTicketState} />
      <TicketField field="subject" value={subject} func={changeTicketState} />
      <TicketSelect
        field="type"
        options="Question Problem Request Incident Refund"
        value={type}
        func={changeTicketState}
      />
      <TicketSelect field="status" options="Open Pending Resolved Closed" value={status} func={changeTicketState} />
      <TicketSelect field="priority" options="Low Medium High Urgent" value={priority} func={changeTicketState} />
      <TicketSelect
        field="department"
        options="Billings Sales QA Shipping Delivery"
        value={department}
        func={changeTicketState}
      />
      <TicketSelect field="agent" options="Sam Jimmy Anderson Micheal" value={agent} func={changeTicketState} />
      <div className="create_ticket-field">
        <label htmlFor="description">Description</label>
        <textarea
          className="default-css ticket-field"
          rows="5"
          name="description"
          value={description}
          onChange={changeTicketState}
        ></textarea>
      </div>
      <div className="create_ticket-field">
        <Button value="Create Ticket" className="ticket-btn" func={postTicketToServer} />
      </div>
    </section>
  );
};

export default CreateTicket;
