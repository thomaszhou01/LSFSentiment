import {
  IconButton,
  Button,
  AppBar,
  Toolbar,
  ThemeProvider,
  createTheme,
  Typography,
  SvgIcon,
  Link,
  Divider,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Reddit, Twitter } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { ReactComponent as TwitchLogo } from "../../resources/twitchLogo.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8514f0",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

function TopBar(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar style={{ paddingRight: "0" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <Link href={props.postLink} underline="none" target="_blank">
            <IconButton>
              <Reddit />
            </IconButton>
          </Link>
          <Link href={props.mediaLink} underline="none" target="_blank">
            <IconButton>
              {props.mediaType == 0 ? (
                <SvgIcon component={TwitchLogo} inheritViewBox />
              ) : props.mediaType == 1 ? (
                <Twitter />
              ) : (
                <LinkIcon />
              )}
            </IconButton>
          </Link>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton onClick={() => props.changePost(false)}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => props.changePost(true)}>
            <ArrowForwardIosIcon />
          </IconButton>
          {/* <Button
            variant="contained"
            startIcon={<ArrowBackIosNewIcon />}
            onClick={() => props.changePost(false)}
            disableElevation={true}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => props.changePost(true)}
            disableElevation={true}
          >
            Next
          </Button> */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default TopBar;
