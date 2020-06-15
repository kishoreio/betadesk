import { PRIMARY_SERVER, UPDATE_A_TICKET } from "../constants/serverUrls";

const updateData = (id, data, type) => {
  const URL = PRIMARY_SERVER + UPDATE_A_TICKET;
  return new Promise((resolve, reject) => {
    try {
      const newData = fetch(URL, {
        method: "PATCH",
        body: JSON.stringify({ id, data, type }),
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      resolve(newData);
    } catch (err) {
      reject(err);
    }
  });
};

export default updateData;
