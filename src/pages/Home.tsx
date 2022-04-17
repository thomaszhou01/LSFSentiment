import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { getSubredditPosts } from "../components/api/getSubredditPosts";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
import { TwitterTweetEmbed } from "react-twitter-embed";
import SubredditPost from "../components/ui/SubredditPost";
import SearchIcon from "@mui/icons-material/Search";
import "./style/Style.css";
const axios = require("axios");

function Home() {
  const navigate = useNavigate();
  const [subreddit, setSubreddit] = useState("");
  const [subredditPosts, setSubredditPosts] = useState([]);

  function Request(props: any) {
    navigate("/subreddit/" + subreddit);
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
  useEffect(() => {
    getSubredditPosts("LivestreamFail", 10).then((response: any) => {
      setSubredditPosts(response.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>LSF Sentiment</h1>
      <h3>Reddit app</h3>
      <div className="App">
        <h2>{subreddit}</h2>
        <ReactPlayer
          url="https://clips-media-assets2.twitch.tv/AT-cm%7C6W9DbThZ9DNu6uLeN1ZWZg.mp4"
          playing={true}
          controls={true}
        />
        <Iframe
          url="https://clips.twitch.tv/embed?clip=SpineyOnerousMarjoramFunRun-lBYDV7WnO46n34ZI&parent=subreddit-sentiment.herokuapp.com"
          width="700px"
          height="450px"
          id="myId"
          className="myClassname"
          position="relative"
        />
        <TwitterTweetEmbed
          tweetId={"1515437059967758340"}
          options={{ height: 100, width: 100 }}
        />
        {subredditPosts.map((postName) => (
          <SubredditPost
            postId={postName["id"]}
            postTitle={postName["title"]}
            key={postName["id"]}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
