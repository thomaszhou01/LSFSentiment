import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Test(props: any) {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="App">
      <p>This is the test page</p>
      <p>This is the test page123</p>
      <p>This is the test pagasedae</p>
      <p>This is the test page1123</p>
      <h2>{id}</h2>
    </div>
  );
}
export default Test;
