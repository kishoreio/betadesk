import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { RiBookmarkLine, RiPencilLine, RiDeleteBin2Line } from "react-icons/ri";
import { FadeLoader } from "react-spinners";
import { priorityColors, userColors } from "../../utils/colors";
import DiscussionTab from "./DiscussionTab";
import TicketSelect from "../CommonComponents/TicketSelect";
import Button from "../CommonComponents/Button";
import fetchData from "../../services/fetchData";
import postData from "../../services/postData";
import updateData from "../../services/updateData";
import "./viewticket.css";

const ViewTicket = () => {
  const [singleTicket, setSingleTicket] = useState([]);
  const [discussion, setDiscussion] = useState([]);
  const [updateTicket, setUpdateTicket] = useState({
    type: "",
    status: "",
    priority: "",
    department: "",
    agent: "",
  });
  const [query] = window.location.hash.match(/(?<=id=).*/gm);
  useEffect(() => {
    async function execute() {
      const { data: ticketData } = await fetchData(query);
      const dataArr = ticketData.ticketData;
      const { type, status, priority, department, agent } = dataArr[0];
      const discussionArr = ticketData.ticketData[0].discussions;
      setSingleTicket(dataArr);
      setUpdateTicket({ type, status, priority, department, agent });
      setDiscussion(discussionArr);
    }
    execute();
  }, [query]);
  const updateDiscussionData = useCallback((data) => {
    const { discussions } = data.data.discussion;
    if (discussions) {
      setDiscussion(discussions);
    }
  }, []);
  const updateTicketProperties = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUpdateTicket({ ...updateTicket, [key]: value });
  };
  const sendUpdatedProperties = () => {
    async function execute() {
      const id = query;
      try {
        const res = await updateData(id, updateTicket, "properties");
        let newData = await res.json();
        newData = newData.data.discussion;
        setSingleTicket([newData]);
      } catch (err) {
        console.log(err);
      }
    }
    execute();
  };
  const deleteTicket = (id) => {
    postData({ ticketNo: id }, "/delete");
  };
  const { type, status, priority, department, agent } = updateTicket;
  if (singleTicket.length === 0) return <FadeLoader />;
  return (
    <section className="view_ticket-container">
      {singleTicket.map((item) => {
        const background = priorityColors(item.priority);
        const userColor = userColors();
        return (
          <div key={item._id} className="view_ticket-content">
            <div className="view_ticket-main">
              <div className="view_ticket-subject">
                <RiBookmarkLine size="1.5rem" opacity="0.7" />
                <p>{item.subject}</p>
                {item.status === "Closed" ? <p>[#Closed]</p> : null}
              </div>
              <div className="view_ticket-status">
                <div style={{ background }}></div>
                <p>{item.priority}</p>
                <Link to="/dashboard/tickets">
                  <div className="view_ticket-delete">
                    <RiDeleteBin2Line color="white" />
                    <Button value="Delete" className="view_ticket-btn" func={() => deleteTicket(item.ticketNo)} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="view_ticket-assign">
              <p>Created by {item.name}</p>
              <hr />
              <p>Assigned to {item.agent}</p>
              <hr />
              <p>Status: {item.status}</p>
              <hr />
              <p>Department: {item.department}</p>
            </div>
            <div className="view_ticket-box">
              <div className="view_ticket-box1">
                <div className="view_ticket-name" style={{ background: userColor }}>
                  <span>{item.name[0].toUpperCase()}</span>
                </div>
                <div>
                  <p>{`${item.name} reported on ${item.createdAt}`}</p>
                  <p>Ticket No: #{item.ticketNo}</p>
                </div>
              </div>
              <hr className="view_ticket-line" />
              <div className="view_ticket-box2">
                <p>{item.description}</p>
              </div>
            </div>
            <DiscussionTab
              discussion={discussion}
              id={query}
              updateDiscussionData={updateDiscussionData}
              userColor={userColor}
            />
          </div>
        );
      })}
      <section className="update_container">
        <div className="update_content">
          <div className="update_title">
            <RiPencilLine size="1.5rem" color="#183247" />
            <h1>Update</h1>
          </div>
          <TicketSelect
            field="type"
            options="Question Problem Request Incident Refund"
            value={type}
            func={updateTicketProperties}
          />
          <TicketSelect
            field="status"
            options="Open Pending Resolved Closed"
            value={status}
            func={updateTicketProperties}
          />
          <TicketSelect
            field="priority"
            options="Low Medium High Urgent"
            value={priority}
            func={updateTicketProperties}
          />
          <TicketSelect
            field="department"
            options="Billings Sales QA Shipping Delivery"
            value={department}
            func={updateTicketProperties}
          />
          <TicketSelect
            field="agent"
            options="Sam Jimmy Anderson Micheal"
            value={agent}
            func={updateTicketProperties}
          />
          <Button value="Update" className="update-btn" func={sendUpdatedProperties} />
        </div>
      </section>
    </section>
  );
};

export default ViewTicket;
