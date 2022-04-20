import { useCallback, useEffect, useState } from "react";
import { Button, ListItem, ListItemText, Paper } from "@mui/material";
import { getPostComments } from "../api/getPostComments";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SubredditPost(props: any) {
  const [searchDepth, setSearchDepth] = useState(10);
  const [subredditComments, setSubredditComments] = useState([]);
  const [negative, setNegative] = useState(0);
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);

  function searchSubreddit(id: string, depth: number) {
    setSubredditComments(props.comments[0]["comments"]);
    setNegative(props.comments[0]["negative"]);
    setPositive(props.comments[0]["positive"]);
    setNeutral(props.comments[0]["neutral"]);
    setTotal(props.comments[0]["total"]);
  }

  function generatePosts(post: never[]) {
    return post.map((postName) => (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{postName["comment"]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{generatePosts(postName["replies"])}</Typography>
        </AccordionDetails>
      </Accordion>
    ));
  }
  useEffect(() => {
    searchSubreddit(props.postId, searchDepth);
  }, []);

  return (
    <Paper
      style={{
        marginBottom: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Accordion style={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{generatePosts(subredditComments)}</Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Button
        variant="contained"
        onClick={() => searchSubreddit(props.postId, searchDepth)}
      >
        Get SentimentData
      </Button>
      {generatePosts(subredditComments)} */}
    </Paper>
  );
}

export default SubredditPost;
