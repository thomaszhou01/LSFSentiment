import React from "react";
import { withRouter } from "react-router-dom";

function Test(props: any) {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is the test page</p>
        <p>This is the test page123</p>
        <p>This is the test pagasedae</p>
        <p>This is the test page1123</p>
        <h2>{props.match.params.id}</h2>
      </header>
    </div>
  );
}
export default withRouter(Test);
