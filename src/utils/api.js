import { BASEURL, USERNAME, PASSWORD } from "./constants";

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};
// /patterns.json?ids=10
const getPatterns = async () => {
  const res = await fetch(`${BASEURL}/patterns/search.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
    },
  });
  return checkServerResponse(res);
};

export { getPatterns };
