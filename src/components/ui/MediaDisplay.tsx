import { useCallback, useState } from "react";
import Iframe from "react-iframe";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ReactPlayer from "react-player";

function MediaDisplay(props: any) {
  const [mediaType, setMediaType] = useState(props.mediaType);

  return (
    <div>
      {mediaType == 0 && (
        <Iframe
          url={
            "https://clips.twitch.tv/embed?clip=" +
            props.clipId +
            "&parent=subreddit-sentiment.herokuapp.com "
          }
          width="700px"
          height="450px"
          id="myId"
          className="myClassname"
          position="relative"
        />
      )}
      {mediaType == 1 && (
        <TwitterTweetEmbed
          tweetId={"1515437059967758340"}
          options={{ height: 100, width: 100 }}
        />
      )}
      {mediaType == 2 && (
        <Iframe
          url="https://clips.twitch.tv/embed?clip=SpineyOnerousMarjoramFunRun-lBYDV7WnO46n34ZI&parent=subreddit-sentiment.herokuapp.com "
          width="700px"
          height="450px"
          id="myId"
          className="myClassname"
          position="relative"
        />
      )}
    </div>
  );
}

export default MediaDisplay;
