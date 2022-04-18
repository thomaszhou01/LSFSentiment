import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSubredditPosts } from "../components/api/getSubredditPosts";
import MediaDisplay from "../components/ui/MediaDisplay";

function SubredditInfo(props: any) {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
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
      console.log(response.data);
      setLoaded(true);
    });
  }, [subreddit]);

  return (
    <div className="App">
      <h1>LSF Sentiment</h1>

      <MediaDisplay mediaType={0} postInfo={subredditPosts} loaded={loaded} />
    </div>
  );
}
export default SubredditInfo;
