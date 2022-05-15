import React from "react";
import { createRoot } from "react-dom/client";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Search from "./pages/Search/Search.jsx";
import VerifyRepo from "./pages/VerifyRepo/VerifyRepo.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/verify-repo" element={<VerifyRepo />} />
      </Routes>
    </Router>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);
