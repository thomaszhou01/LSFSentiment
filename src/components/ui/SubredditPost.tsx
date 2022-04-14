import { useCallback, useState } from "react";
import { ListItem, ListItemText, Paper } from "@mui/material";

function SubredditPost(props: any) {
  return (
    <Paper style={{ marginBottom: 5 }}>
      <ListItem>
        <ListItemText primary={props.postTitle} />
      </ListItem>
    </Paper>
  );
}

export default SubredditPost;
