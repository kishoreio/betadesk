import { PRIMARY_SERVER, UPDATE_A_TICKET } from "../constants/serverUrls";

const postData = (post, api) => {
  let URL = null;
  if (!api) {
    URL = PRIMARY_SERVER + UPDATE_A_TICKET;
  } else {
    URL = PRIMARY_SERVER + UPDATE_A_TICKET + api;
  }
  console.log(post);
  console.log(URL);
  return new Promise((resolve, reject) => {
    async function execute() {
      try {
        const res = await fetch(URL, {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await res.json();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    }
    execute();
  });
};

export default postData;
