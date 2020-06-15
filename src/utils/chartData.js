export const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 10,
          step: 1,
        },
      },
    ],
  },
};

export const chartData = (arr) => {
  return {
    labels: ["Billings", "Sales", "QA", "Shipping", "Delivery"],
    datasets: [
      {
        label: "No.of Tickets Per Department",
        data: arr,
        borderColor: [
          "rgba(252, 92, 101, 1)",
          "rgba(253, 150, 68, 1)",
          "rgba(254, 211, 48, 1)",
          "rgba(75, 123, 236, 1)",
          "rgba(165, 94, 234, 1)",
        ],
        backgroundColor: [
          "rgba(252, 92, 101, 0.5)",
          "rgba(253, 150, 68, 0.5)",
          "rgba(254, 211, 48, 0.5)",
          "rgba(75, 123, 236, 0.5)",
          "rgba(165, 94, 234, 0.5)",
        ],
      },
    ],
  };
};
