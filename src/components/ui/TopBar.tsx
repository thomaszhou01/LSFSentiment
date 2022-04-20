import {
  IconButton,
  AppBar,
  Toolbar,
  ThemeProvider,
  createTheme,
  Typography,
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <IconButton onClick={() => props.changePost(false)}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => props.changePost(true)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default TopBar;
