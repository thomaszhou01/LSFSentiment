import React from "react";
import { withRouter } from "react-router-dom";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../components/Style.css";
const axios = require("axios");

function Home() {
  const [subreddit, setSubreddit] = useState("");

  function Request(props: any) {
    axios
      .get("https://reddit-sentiment-backend.herokuapp.com/test")
      .then((response: any) => {
        // handle success
        console.log(response.data);
        // setSubreddit(response.data[0]);
      });
  }

  function HandleSubredditInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSubreddit(event.target.value);
  }

  function HandleSubredditSearch() {
    console.log(subreddit.trim());
  }

  const SearchButton = () => (
    <IconButton onClick={HandleSubredditSearch}>
      <SearchIcon />
    </IconButton>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>This is the real page</p>
      </header>
      <Button onClick={Request}>button</Button>
      {subreddit}
      <div>
        <Paper>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            value={subreddit}
            onChange={HandleSubredditInput}
            placeholder="Search Subreddit"
            InputProps={{ endAdornment: <SearchButton /> }}
          />
        </Paper>
      </div>
    </div>
  );
}
export default withRouter(Home);
