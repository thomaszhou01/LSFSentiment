import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSubredditPosts } from "../components/api/getSubredditPosts";
import SubredditPost from "../components/ui/SubredditPost";
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
      {subredditPosts.map((postName) => (
        <SubredditPost
          postId={postName["id"]}
          postTitle={postName["title"]}
          key={postName["id"]}
        />
      ))}
    </div>
  );
}
export default SubredditInfo;
