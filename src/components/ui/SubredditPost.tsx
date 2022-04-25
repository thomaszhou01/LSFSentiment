import { useCallback, useEffect, useState } from "react";
import {
  Button,
  ListItem,
  ListItemText,
  Paper,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const backgroundColor = "#474747";
const greyBoarder = "grey.700";

function SubredditPost(props: any) {
  const [subredditComments, setSubredditComments] = useState([]);

  function generatePosts(post: never[]) {
    return post.map((postName) => (
      <Accordion
        style={{
          width: "100%",
          backgroundColor: backgroundColor,
          color: "white",
        }}
        sx={{ border: 1, borderColor: greyBoarder }}
      >
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
  }, [props.comments]);

  return (
    <Paper
      style={{
        marginBottom: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Accordion
        style={{
          width: "100%",
          backgroundColor: backgroundColor,
          color: "white",
        }}
        sx={{ border: 1, borderColor: greyBoarder }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View Top Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{generatePosts(subredditComments)}</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}

export default SubredditPost;
