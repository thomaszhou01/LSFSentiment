import { useEffect, useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ReactPlayer from "react-player";
import SubredditPost from "./SubredditPost";
import TopBar from "./TopBar";
import SentimentChart from "./SentimentChart";
import { LinearProgress } from "@mui/material";
import { getPostComments } from "../api/getPostComments";
import { getTwitchClip } from "../api/getTwitchClip";
import "./style/MediaDisplay.css";

function MediaDisplay(props: any) {
  const [postNum, setPostNum] = useState(0);
  const [postInfo, setPostInfo] = useState([]);
  const [clipLink, setClipLink] = useState("");
  const [loaded, setLoaded] = useState(false);

  function changePost(increase: boolean) {
    let nextNum = postNum;
    if (increase) {
      nextNum += 1;
    } else {
      nextNum -= 1;
    }
    if (nextNum >= props.postInfo.length || nextNum < 0) {
      console.log("out of range");
    } else {
      setLoaded(false);
      setPostNum(nextNum);
    }
  }

  useEffect(() => {
    let postId = props.postInfo[postNum];
    if (postId === undefined) {
      return;
    }
    getTwitchClip(props.postInfo[postNum]["mediaLink"]).then((response) => {
      const linkToClip = response.data;
      setClipLink(linkToClip);
      setLoaded(true);
      getPostComments(postId["id"]).then((response) => {
        console.log(response.data);
        setPostInfo(response.data);
      });
    });
  }, [postNum, props.loaded]);

  return (
    <div>
      {props.loaded && postInfo.length > 0 ? (
        <div className="mediaDisplay">
          <TopBar
            changePost={changePost}
            title={props.postInfo[postNum]["title"]}
          />
          {props.postInfo[postNum]["mediaType"] === 0 ? (
            <div className="video-wrapper">
              <ReactPlayer
                url={clipLink}
                playing={true}
                controls={true}
                style={{ width: 1000 }}
                width="100%"
                height="100%"
              />
            </div>
          ) : props.postInfo[postNum]["mediaType"] === 1 ? (
            props.postInfo[postNum]["mediaType"] === 1 &&
            loaded && (
              <div className="tweet-wrapper">
                <TwitterTweetEmbed tweetId={clipLink} />
              </div>
            )
          ) : props.postInfo[postNum]["mediaType"] === 2 ? (
            <p>Missing</p>
          ) : (
            <LinearProgress />
          )}
          <SentimentChart comments={postInfo} />
          <SubredditPost
            postId={props.postInfo[postNum]["id"]}
            postTitle={props.postInfo[postNum]["title"]}
            comments={postInfo}
          />
        </div>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}

export default MediaDisplay;
