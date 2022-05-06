import { useEffect, useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ReactPlayer from "react-player";
import SubredditPost from "./SubredditPost";
import TopBar from "./TopBar";
import SentimentChart from "./SentimentChart";
import { LinearProgress, Fade } from "@mui/material";
import { getPostComments } from "../api/getPostComments";
import { getTwitchClip } from "../api/getTwitchClip";
import { useQuery } from "react-query";
import "./style/MediaDisplay.css";

function MediaDisplay(props: any) {
  const [postNum, setPostNum] = useState(0);
  const [clipLink, setClipLink] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [commentLoaded, setCommentLoaded] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [disabled, setDisabled] = useState(0);
  const [id, setId] = useState("");

  const {
    isLoading: isLoadingComments,
    data: comments,
    refetch: refreshComments,
  } = useQuery(
    [id],
    () => {
      return getPostComments(props.postInfo[postNum]["id"]);
    },
    { enabled: false, cacheTime: Infinity }
  );

  function changePost(increase: boolean) {
    setCommentLoaded(false);
    let nextNum = postNum;
    if (increase) {
      nextNum += 1;
    } else {
      nextNum -= 1;
    }
    if (nextNum >= 0 && nextNum < props.postInfo.length) {
      setLoaded(false);
      setPostNum(nextNum);
      setDisabled(1);
      if (nextNum === 0) {
        setDisabled(0);
      } else if (nextNum === props.postInfo.length - 1) {
        setDisabled(2);
      }
    }
  }

  function toggleAutoplay(toggle: boolean) {
    console.log(toggle);
    setAutoplay(toggle);
  }

  useEffect(() => {
    let postId = props.postInfo[postNum];
    if (postId === undefined) {
      return;
    }
    setId(props.postInfo[postNum]["id"]);
    getTwitchClip(props.postInfo[postNum]["mediaLink"]).then((response) => {
      const linkToClip = response.data;
      setClipLink(linkToClip);
      setLoaded(true);
      refreshComments();
    });
  }, [postNum, props.loaded]);

  useEffect(() => {
    if (comments != undefined) {
      setCommentLoaded(true);
    }
  }, [comments]);

  return (
    <div>
      {props.loaded ? (
        <div className="mediaDisplay">
          <TopBar
            changePost={changePost}
            toggleAutoplay={toggleAutoplay}
            autoplay={autoplay}
            mediaType={props.postInfo[postNum]["mediaType"]}
            mediaLink={props.postInfo[postNum]["mediaLink"]}
            postLink={props.postInfo[postNum]["redditLink"]}
            score={props.postInfo[postNum]["score"]}
            title={props.postInfo[postNum]["title"]}
            disabled={disabled}
          />
          {props.postInfo[postNum]["mediaType"] === 0 ? (
            <div className="video-wrapper">
              <ReactPlayer
                url={clipLink}
                playing={true}
                controls={true}
                className="react-player"
                onEnded={() => {
                  if (autoplay) {
                    changePost(true);
                  }
                }}
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
          {commentLoaded && (
            <Fade in={commentLoaded}>
              <div>
                <SentimentChart comments={comments.data} />
                <SubredditPost
                  postId={props.postInfo[postNum]["id"]}
                  postTitle={props.postInfo[postNum]["title"]}
                  comments={comments.data}
                />
              </div>
            </Fade>
          )}
        </div>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}

export default MediaDisplay;
