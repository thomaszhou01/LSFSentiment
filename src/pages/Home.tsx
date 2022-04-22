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
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { green, orange } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { getSubredditPosts } from "../components/api/getSubredditPosts";
import HomeButton from "../components/ui/HomeButton";
import SearchIcon from "@mui/icons-material/Search";
import "./style/Style.css";

const purple = "#8514f0";
const white = "#cfcfcf";

const theme = createTheme({
  palette: {
    primary: {
      main: purple,
    },
    secondary: {
      main: white,
    },
    action: {
      disabledBackground: "#3c086e",
      disabled: "#919191",
    },
  },
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          color: purple,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: white,
          textAlign: "center",
          fontWeight: "bold",
        },
      },
    },
  },
});
function Home() {
  const navigate = useNavigate();
  const [subreddit, setSubreddit] = useState("livestreamfail");
  const [searchType, setSearchType] = useState("");
  const [searchOption, setSearchOption] = useState("");
  const [isTop, setIsTop] = useState(false);
  const [ready, setReady] = useState(true);

  function Request(props: any) {
    if (searchType != "") {
      navigate(
        "/subreddit/" + subreddit + "/" + searchType + "/" + searchOption
      );
      return;
    }
    navigate("/subreddit/" + subreddit);
  }

  function HandleOptionChange(props: any) {
    setSearchOption(props.target.value as string);
    if (searchType != "" && props.target.value != "") {
      setReady(false);
    } else {
      setReady(true);
    }
  }

  function HandleSubredditSearch() {
    console.log(subreddit.trim());
  }

  function HandleSearchType(props: any) {
    setSearchType(props.target.value);
    if (props.target.value == "top") {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
    setSearchOption("");
    setReady(true);
  }

  const SearchButton = () => (
    <IconButton onClick={HandleSubredditSearch}>
      <SearchIcon />
    </IconButton>
  );
  return (
    <div className="homepage">
      <HomeButton />
      <h3>
        Watch Clips from Livestream Fails and get the community sentiment on
        them
      </h3>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="radio"
      >
        <ThemeProvider theme={theme}>
          <FormControl>
            <FormLabel>Search Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="sortType"
              onChange={HandleSearchType}
            >
              <FormControlLabel value="hot" control={<Radio />} label="Hot" />
              <FormControlLabel value="top" control={<Radio />} label="Top" />
              <FormControlLabel value="new" control={<Radio />} label="New" />
            </RadioGroup>
          </FormControl>
          {!isTop && (
            <FormControl variant="filled" fullWidth>
              <InputLabel style={{ color: white }}>Number of Posts</InputLabel>
              <Select
                value={searchOption}
                label="Number of Posts"
                onChange={HandleOptionChange}
                style={{ color: white, backgroundColor: "gray" }}
              >
                <MenuItem value={"10"}>10</MenuItem>
                <MenuItem value={"25"}>25</MenuItem>
                <MenuItem value={"50"}>50</MenuItem>
                <MenuItem value={"75"}>75</MenuItem>
                <MenuItem value={"100"}>100</MenuItem>
              </Select>
            </FormControl>
          )}
          {isTop && (
            <FormControl>
              <FormLabel style={{ color: "white", textAlign: "center" }}>
                Search Period
              </FormLabel>
              <RadioGroup row name="sortType" onChange={HandleOptionChange}>
                <FormControlLabel
                  value="hour"
                  control={<Radio />}
                  label="Hour"
                />
                <FormControlLabel value="day" control={<Radio />} label="Day" />
                <FormControlLabel
                  value="week"
                  control={<Radio />}
                  label="Week"
                />
                <FormControlLabel
                  value="month"
                  control={<Radio />}
                  label="Month"
                />
                <FormControlLabel value="all" control={<Radio />} label="All" />
              </RadioGroup>
            </FormControl>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={Request}
            disabled={ready}
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
