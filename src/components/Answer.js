import React from 'react'

export default function Answer({idx, question, correctAnswer , wrongAnsArray,}) {
    return (
      <div>
        <h3>{question}</h3>
        {
          (
            wrongAnsArray.includes(idx)) ? (
            <li style={{ color: "red" }}>{correctAnswer}</li>
          )
          :
           (
             <li style={{ color: "green" }}>{correctAnswer}</li>
             )
        }
      </div>
    );
  }