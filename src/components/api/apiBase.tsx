const axios = require("axios");
export default axios.create({
  timeout: 0,
  baseURL: "http://127.0.0.1:8000/",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // },
});
