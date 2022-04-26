import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import SubredditInfo from "./pages/SubredditInfo";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subreddit/:subreddit" element={<SubredditInfo />} />
          <Route path="/subreddit/:subreddit" element={<SubredditInfo />} />
          <Route
            path="/subreddit/:subreddit/:type"
            element={<SubredditInfo />}
          />
          <Route
            path="/subreddit/:subreddit/:type/:posts"
            element={<SubredditInfo />}
          />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
