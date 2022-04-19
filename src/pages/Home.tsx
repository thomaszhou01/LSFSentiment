import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getSubredditPosts } from "../components/api/getSubredditPosts";
import SearchIcon from "@mui/icons-material/Search";
import "./style/Style.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#630cb4",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

function Home() {
  const navigate = useNavigate();
  const [subreddit, setSubreddit] = useState("livestreamfail");
  const [subredditPosts, setSubredditPosts] = useState([]);

  function Request(props: any) {
    navigate("/subreddit/" + subreddit);
  }

  function HandleSubredditInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSubreddit(event.target.value);
  }

  function HandleSubredditSearch() {
    console.log(subreddit.trim());
  }

  const SearchButton = () => (
    <IconButton onClick={HandleSubredditSearch}>
      <SearchIcon />
    </IconButton>
  );
  useEffect(() => {
    getSubredditPosts("LivestreamFail", 10).then((response: any) => {
      console.log(response.data);
      setSubredditPosts(response.data);
    });
  }, []);
  return (
    <div className="homepage">
      <h1>LSF Sentiment</h1>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <ThemeProvider theme={theme}>
          <FormControl>
            <FormLabel style={{ color: "white" }}>Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="sortType"
            >
              <FormControlLabel value="Hot" control={<Radio />} label="Hot" />
              <FormControlLabel value="Top" control={<Radio />} label="Top" />
              <FormControlLabel value="New" control={<Radio />} label="New" />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={Request}
            fullWidth
          >
            Search
          </Button>
        </ThemeProvider>
      </Stack>
    </div>
  );
}
export default Home;
