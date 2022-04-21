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
  const [subredditComments, setSubredditComments] = useState([]);

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
    setSubredditComments(props.comments[0]["comments"]);
    console.log(props.comments);
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
    </Paper>
  );
}

export default SubredditPost;
