const axios = require("axios");
export default axios.create({
  timeout: 0,
  // baseURL: "http://127.0.0.1:8000/",
  baseURL: "https://reddit-sentiment-backend.herokuapp.com/",

  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // },
});
