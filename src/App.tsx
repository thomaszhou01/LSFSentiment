import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing/:id" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
