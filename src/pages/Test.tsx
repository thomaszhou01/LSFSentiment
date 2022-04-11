import React from "react";
import { withRouter } from "react-router-dom";

function Test() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is the test page</p>
        <p>This is the test page</p>
        <p>This is the test page</p>
        <p>This is the test page</p>
      </header>
    </div>
  );
}
export default withRouter(Test);
