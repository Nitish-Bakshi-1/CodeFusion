import React from "react";
import Home from "./pages/Home.js";
import EditorPage from "./pages/EditorPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
