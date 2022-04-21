import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();

  function RerouteHome() {
    navigate("/");
  }
  return <h1 onClick={RerouteHome}>LSF Sentiment</h1>;
}

export default HomeButton;
