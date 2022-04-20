import { useEffect, useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ReactPlayer from "react-player";
import SubredditPost from "./SubredditPost";
import TopBar from "./TopBar";
import SentimentChart from "./SentimentChart";
import { getPostComments } from "../api/getPostComments";
import "./style/MediaDisplay.css";

function MediaDisplay(props: any) {
  const [postNum, setPostNum] = useState(0);
  const [postInfo, setPostInfo] = useState([]);

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
      setPostNum(nextNum);
    }
  }

  useEffect(() => {
    let postId = props.postInfo[postNum];
    if (postId === undefined) {
      return;
    }
    getPostComments(postId["id"]).then((response) => {
      setPostInfo(response.data);
    });
  }, [postNum, props.loaded]);

  return (
    <div>
      {props.loaded && postInfo.length > 0 && (
        <div className="mediaDisplay">
          <TopBar
            changePost={changePost}
            title={props.postInfo[postNum]["title"]}
          />
          {props.postInfo[postNum]["mediaType"] === 0 && (
            <div className="video-wrapper">
              <ReactPlayer
                url={props.postInfo[postNum]["mediaLink"]}
                playing={true}
                controls={true}
                style={{ width: 1000 }}
                width="100%"
                height="100%"
              />
            </div>
          )}
          {props.postInfo[postNum]["mediaType"] === 1 && (
            <div className="tweet-wrapper">
              <TwitterTweetEmbed
                onLoad={function noRefCheck() {}}
                tweetId={props.postInfo[postNum]["mediaLink"]}
              />
            </div>
          )}
          {props.postInfo[postNum]["mediaType"] === 2 && <p>Missing</p>}
          <SentimentChart comments={postInfo} />
          <SubredditPost
            postId={props.postInfo[postNum]["id"]}
            postTitle={props.postInfo[postNum]["title"]}
            comments={postInfo}
          />
        </div>
      )}
    </div>
  );
}

export default MediaDisplay;
