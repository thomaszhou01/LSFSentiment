import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/testing/:id" component={Test} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
