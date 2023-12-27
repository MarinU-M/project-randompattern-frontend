import { baseUrl, userName, password } from "./constants";

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};
// /patterns/search.json
const getPatterns = () => {
  return fetch(`${baseUrl}/patterns.json?ids=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Basic " + btoa(`${userName}:${password}`),
    },
  }).then(checkServerResponse);
};

export { getPatterns };
