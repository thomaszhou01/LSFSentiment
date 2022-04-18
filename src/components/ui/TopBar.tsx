import {
  IconButton,
  ButtonGroup,
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const theme = createTheme({
  palette: {
    primary: {
      main: "#630cb4",
    },
  },
});

function TopBar(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton onClick={() => props.changePost(false)}>
            <ArrowBackIosNewIcon />
            Previous
          </IconButton>
          <IconButton onClick={() => props.changePost(true)}>
            Next
            <ArrowForwardIosIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default TopBar;
