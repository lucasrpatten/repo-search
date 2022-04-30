import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
    <HashRouter>
    <Routes>
    <Route path="/" element={<App/>} />
    <Routes>
    </HashRouter>
    </React.StrictMode>

    document.getElementById('app'));
