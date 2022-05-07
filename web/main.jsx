import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search.jsx";
export default function App() {
  return (
    <React.StrictMode>
      <Router basename="/">
        <Search />
      </Router>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);
