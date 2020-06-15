import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { FaUserCircle } from "react-icons/fa";
import { options, chartData } from "../../utils/chartData";
import OverViewCount from "./OverViewCount";
import fetchData from "../../services/fetchData";
import "./overview.css";

const OverView = () => {
  const [statusCount, setStatusCount] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    async function execute() {
      try {
        const data = await fetchData("overview");
        setStatusCount(data.data.status);
        setDepartmentData(data.data.department);
        setAgents(data.data.agent);
      } catch (err) {
        console.error(err);
      }
    }
    execute();
  }, []);
  if (statusCount.length === 0 || departmentData.length === 0) return <p />;
  const data = chartData(departmentData);
  return (
    <section className="overview_overall">
      <div className="overview_total">
        <OverViewCount text="Open" start={0} end={statusCount[0]} />
        <OverViewCount text="Pending" start={0} end={statusCount[1]} />
        <OverViewCount text="Resolved" start={0} end={statusCount[2]} />
        <OverViewCount text="Closed" start={0} end={statusCount[3]} />
      </div>
      <div className="overview_chart">
        <div className="overview_bar">
          <Bar data={data} options={options} />
        </div>
        <div className="overview_available">
          <h1>Assigned Agents</h1>
          {agents.map((item, index) => {
            return (
              <div className="overview_agent" key={index}>
                <FaUserCircle />
                <h1>{item}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OverView;
