const axios = require("axios");
export default axios.create({
  timeout: 0,
  baseURL: "https://reddit-sentiment-backend.herokuapp.com/",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // },
});
