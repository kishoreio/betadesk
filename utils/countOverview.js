exports.countStatus = (arr) => {
  const data = ['Open', 'Pending', 'Resolved', 'Closed'].map((type) =>
    filterData(type, arr, 'status')
  );
  let open = data[0].length;
  let pending = data[1].length;
  let resolved = data[2].length;
  let closed = data[3].length;
  return [open, pending, resolved, closed];
};

exports.countDepartment = (arr) => {
  const data = ['Billings', 'Sales', 'QA', 'Shipping', 'Delivery'].map((type) =>
    filterData(type, arr, 'department')
  );
  let billings = data[0].length;
  let sales = data[1].length;
  let qa = data[2].length;
  let shipping = data[3].length;
  let delivery = data[4].length;
  return [billings, sales, qa, shipping, delivery];
};

exports.getAgentName = (arr) => {
  const agent = arr.map((item) => item.agent);
  return [...new Set(agent)];
};

const filterData = (type, arr, cat) => {
  return arr.filter((item) => {
    if (item[cat] === type) {
      return item;
    }
  });
};
