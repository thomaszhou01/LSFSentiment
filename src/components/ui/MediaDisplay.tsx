import { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ReactPlayer from "react-player";
import SubredditPost from "./SubredditPost";
import TopBar from "./TopBar";
import SentimentChart from "./SentimentChart";
import "./style/MediaDisplay.css";

function MediaDisplay(props: any) {
  const [postNum, setPostNum] = useState(0);

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

  return (
    <div>
      {props.loaded && (
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
          <SentimentChart comments={props.postInfo[postNum]["comments"]} />
          <SubredditPost
            postId={props.postInfo[postNum]["id"]}
            postTitle={props.postInfo[postNum]["title"]}
            key={props.postInfo[postNum]["id"]}
            comments={props.postInfo[postNum]["comments"]}
          />
        </div>
      )}
    </div>
  );
}

export default MediaDisplay;
