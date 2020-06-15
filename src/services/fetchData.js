import { PRIMARY_SERVER, GET_ALL_DATA } from "../constants/serverUrls";

const fetchData = (query) => {
  let URL = null;
  if (query === "all") {
    URL = PRIMARY_SERVER + GET_ALL_DATA;
  } else if (query === "overview") {
    URL = PRIMARY_SERVER + GET_ALL_DATA + `/${query}`;
  } else {
    URL = PRIMARY_SERVER + GET_ALL_DATA + "?id=" + query;
  }
  return new Promise((resolve, reject) => {
    async function execute() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    }
    execute();
  });
};

export default fetchData;
