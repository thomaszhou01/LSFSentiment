import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { getSubredditPosts } from "../components/api/getSubredditPosts";
import SubredditPost from "../components/ui/SubredditPost";
import MediaDisplay from "../components/ui/MediaDisplay";
import { getPostComments } from "../components/api/getPostComments";

function SubredditInfo(props: any) {
  const navigate = useNavigate();
  const [subredditPosts, setSubredditPosts] = useState([]);
  const { subreddit, posts } = useParams();

  useEffect(() => {
    console.log(posts);
    let subredditName = subreddit?.toString();
    let numPosts = 10;
    if (subredditName == null) {
      subredditName = "LivestreamFail";
    }
    if (posts != null) {
      numPosts = parseInt(posts);
    }

    getSubredditPosts(subredditName, numPosts).then((response: any) => {
      setSubredditPosts(response.data);
    });
  }, [subreddit]);

  useEffect(() => {
    console.log(subredditPosts);
  }, [subredditPosts]);

  return (
    <div className="App">
      <h2>{subreddit}</h2>
      {/* <ReactPlayer
        url="https://clips-media-assets2.twitch.tv/AT-cm%7C6W9DbThZ9DNu6uLeN1ZWZg.mp4"
        playing={true}
        controls={true}
      /> */}
      {/* {subredditPosts.map((postName) => (
        <SubredditPost
          postId={postName["id"]}
          postTitle={postName["title"]}
          key={postName["id"]}
        />
      ))} */}
      <MediaDisplay
        mediaType={0}
        clipId={"SpineyOnerousMarjoramFunRun-lBYDV7WnO46n34ZI"}
      />
    </div>
  );
}
export default SubredditInfo;
