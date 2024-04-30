import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quiz");
  };


  return (
    <div>
      <h1>Welcome</h1>
      <h2>This is the Quiz Application</h2>
      <button onClick={handleClick}>Start Quiz</button>
    </div>
  );
}
