import logo from "./logo.svg";
import "./App.css";
import ShowAnswer from "./components/ShowAnswer";
import Quiz from "./components/Quiz";
import LandingPage from "./components/LandingPage";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
