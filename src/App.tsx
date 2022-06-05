import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import History from "./pages/History/History";
import Result from "./pages/Result/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<History />} />
        <Route path="/mission" element={<MainPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
