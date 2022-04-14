import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./style/Style.css";
const axios = require("axios");

function Home() {
  const navigate = useNavigate();
  const [subreddit, setSubreddit] = useState("");

  function Request(props: any) {
    navigate("/testing/" + subreddit);
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
      <h1>Subreddit Sentiment</h1>
      <h3>Reddit app</h3>
      {subreddit}
      <div className="searchBar">
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
        <Button id="button" variant="contained" onClick={Request}>
          Search
        </Button>
      </div>
    </div>
  );
}
export default Home;
