import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiUserPlus, FiActivity, FiFilter } from "react-icons/fi";
import { priorityColors, userColors } from "../../utils/colors";
import fetchData from "../../services/fetchData";
import postData from "../../services/postData";
import TicketSelect from "../CommonComponents/TicketSelect";
import Button from "../CommonComponents/Button";
import "./ticketlist.css";

const ViewTicket = () => {
  const [ticketData, setTicketData] = useState([]);
  const [filter, setFilter] = useState({});
  const [sendFilterData, setSendFilterData] = useState({});
  const filterData = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFilter({ ...filter, [key]: value });
  };
  const onSubmitFilterData = (e) => {
    e.preventDefault();
    if (e.target.value !== "Clear") {
      setSendFilterData(filter);
    } else if (e.target.value === "Clear") {
      setSendFilterData({});
    }
  };

  useEffect(() => {
    async function execute() {
      try {
        const data = await fetchData("all");
        const {
          data: { ticketData },
        } = data;
        setTicketData(ticketData.reverse());
      } catch (err) {
        console.error(err);
      }
    }
    execute();
  }, []);

  useEffect(() => {
    async function execute() {
      try {
        const data = await postData(sendFilterData, "/filter");
        setTicketData(data.data.filterData);
      } catch (err) {
        console.error(err);
      }
    }
    execute();
  }, [sendFilterData]);
  return (
    <section className="ticket_list-container">
      <div className="ticket_list-content">
        {ticketData.map((item) => {
          const background = priorityColors(item.priority);
          const userColor = userColors();
          return (
            <div key={item._id} className="ticket_list-width">
              <div className="ticket_list-box" style={{ borderColor: userColor }}>
                <div className="ticket_list-name" style={{ background: userColor }}>
                  <span>{item.name[0].toUpperCase()}</span>
                </div>
                <hr className="ticket_list-line" />
                <div className="ticket_list-detail">
                  <div className="ticket_list-a">
                    <Link
                      to={{
                        pathname: "/dashboard/view-ticket",
                        search: `?id=${item.ticketNo}`,
                      }}
                    >
                      <p>
                        {`${item.subject}  #${item.ticketNo}`}
                        <span className="ticket_list-click">(click to view)</span>
                      </p>
                    </Link>
                  </div>
                  <div className="ticket_list-from">
                    <div className="ticket_list-group">
                      <FiPhone />
                      <p>{item.name}</p>
                    </div>
                    <span>.</span>
                    <p>Issue related to {item.department}</p>
                    <span>.</span>
                    <p className="ticket_list-date">Created on {item.createdAt}</p>
                  </div>
                </div>
                <div>
                  <div className="ticket_list-status">
                    <div className="ticket_list-priority" style={{ background }}></div>
                    <p>{item.priority}</p>
                  </div>
                  <div className="ticket_list-status">
                    <FiUserPlus />
                    <p>{item.agent}</p>
                  </div>
                  <div className="ticket_list-status">
                    <FiActivity />
                    <p>{item.status}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ticket_list-filter">
        <div className="ticket_list_title">
          <FiFilter size="1.5rem" color="#183247" />
          <h1>Filter</h1>
        </div>
        <div className="ticket_list-main">
          <TicketSelect field="type" options="Question Problem Request Incident Refund" func={filterData} />
          <TicketSelect field="status" options="Open Pending Resolved Closed" func={filterData} />
          <TicketSelect field="priority" options="Low Medium High Urgent" func={filterData} />
          <TicketSelect field="department" options="Billings Sales QA Shipping Delivery" func={filterData} />
          <TicketSelect field="agent" options="Sam Jimmy Anderson Micheal" func={filterData} />
          <div className="ticket_list-btn">
            <Button value="Apply Filter" className="filter-btn" func={onSubmitFilterData} />
            <Button value="Clear" className="filter-btn" func={onSubmitFilterData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewTicket;
