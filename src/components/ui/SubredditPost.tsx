import { useCallback, useState } from "react";
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
    getPostComments(id, depth).then((response: any) => {
      const data = response.data;
      console.log(data[0]["comments"]);
      setSubredditComments(data[0]["comments"]);
      setNegative(data[0]["negative"]);
      setPositive(data[0]["positive"]);
      setNeutral(data[0]["neutral"]);
      setTotal(data[0]["total"]);
    });
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

  return (
    <Paper
      style={{
        marginBottom: 5,
        display: "flex",
        justifyContent: "center",
        width: 1000,
      }}
    >
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              {props.postTitle}
              <Button
                variant="contained"
                onClick={() => searchSubreddit(props.postId, searchDepth)}
              >
                Get SentimentData
              </Button>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{generatePosts(subredditComments)}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Paper>
  );
}

export default SubredditPost;
