import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubredditInfo from "./pages/SubredditInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subreddit/:subreddit" element={<SubredditInfo />} />
        <Route path="/subreddit/:subreddit" element={<SubredditInfo />} />
        <Route path="/subreddit/:subreddit/:type" element={<SubredditInfo />} />
        <Route
          path="/subreddit/:subreddit/:type/:posts"
          element={<SubredditInfo />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
