const colorObj = {
  Low: "#2ECC71",
  Medium: "#5DADE2",
  High: " #F4D03F",
  Urgent: "red",
};

const colorArr = ["#EC407A", "#AB47BC", "#5C6BC0", "#26A69A", "#FFA726", "#8D6E63"];

export const priorityColors = (key) => {
  const color = colorObj[key];
  return color;
};

export const userColors = () => {
  const rand = Math.floor(Math.random() * (5 - 0 + 1) + 0);
  const color = colorArr[rand];
  return color;
};
