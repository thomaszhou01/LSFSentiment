import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "../components/Style.css";
const axios = require("axios");

function Home() {
  const [text, setText] = useState("");

  function Request(props: any) {
    axios.get("http://127.0.0.1:8000/test").then((response: any) => {
      // handle success
      console.log(response.data);
      setText(response.data[0]);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>This is the real page</p>
      </header>
      <Button onClick={Request}>button</Button>
      {text}
    </div>
  );
}
export default withRouter(Home);
