import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search.jsx";


if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

export default function App() {
  return (
    <Router basename="/">
      <Search />
    </Router>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);
