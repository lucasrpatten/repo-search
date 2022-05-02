import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Search.jsx';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />}>

        </Route>
      </Routes>
    </Router>
  );

}

const root = createRoot(document.getElementById('root'));

root.render(
  <App />
);

