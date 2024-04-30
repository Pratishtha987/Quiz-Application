import React, { useState, useEffect } from "react";
import { questions } from "../data";
import Ques from "./Ques";
import Answer from "./Answer";
import { useNavigate } from "react-router-dom";

export default function QuesList() {
  const [isShowAns, setIsShowAns] = useState(false);
  const [elements, setElements] = useState([]);
  const [answers, setAnswers] = useState({});
  const [checkMark, setCheckMark] = useState(0);
  const [wrongAnsArray, setWrongAnsArray] = useState([]);
  const [timer, setTimer] = useState(0);
  const [time, setTime] = useState();
  const [digitalClock, setDigitalClock] = useState("00:00:00");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isShowAns) {
      const randomIndexes = [];
      let x = 5;
      while (x > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
          x--;
        }
      }
      const randomQuestions = randomIndexes.map((index) => questions[index]);
      setElements(randomQuestions);
    }
  }, [isShowAns]);

  useEffect(() => {
    let intevelId = setInterval(() => {
      setTimer((prevTime) => {
        setDigitalClockTime(prevTime + 1);
        return prevTime + 1;
      });
    },1000);
    setTime(intevelId);
    return () => clearInterval(time);
  },[]);

  function submitHandler() {
    checkMarks();
    setIsShowAns(true);
    clearInterval(time);
  }
  console.log(timer);
  function setDigitalClockTime(currTime) {
    let temp = currTime;
    let sec;
    let min;
    let hours;
    if (currTime < 60) {
      sec = currTime;
    }
    if (currTime >= 60) {
      min = Math.floor(currTime / 60);
      sec = temp % 60;
    }
    if (min > 60) {
      hours = Math.floor(min / 60);
      min = min % 60;
    }

    hours = hours ? hours : "00";
    min = min ? min : "00";
    sec = sec > 9 ? sec : `0${sec}`;
    const digitalTime = `${hours}:${min}:${sec}`;
    // console.log({digitalTime})
    setDigitalClock(digitalTime);
  }

  function checkMarks() {
    const tempArr = [];
    let count = 0;
    for (let key in answers) {
      elements.forEach((element) => {
        if (+key == element.id) {
          if (answers[key] === element.correct_answer) count++;
          else {
            tempArr.push(element.id);
          }
        }
      });
    }

    setCheckMark(count);
    setWrongAnsArray(tempArr);
    console.log(tempArr);
    console.log(checkMark);
    console.log(count);
    return count;
  }

  return (
    <>
      <div>
        {isShowAns ? (
          <div>
            <div>
              <h4>Your Final Score: {checkMark}</h4>
            </div>
            <div>
              <h4>{digitalClock}</h4>
            </div>
            {elements.map((element) => (
              <Answer
                key={element.id}
                idx={element.id}
                question={element.question}
                correctAnswer={element.correct_answer}
                wrongAnsArray={wrongAnsArray}
              />
            ))}
            <button onClick={() => navigate("/")}>Next Quiz</button>
          </div>
        ) : (
          <div>
            <div>
              <h4>{digitalClock}</h4>
            </div>
            <form onSubmit={submitHandler}>
              {elements.map((element, a) => (
                <Ques
                  key={a}
                  idx={element.id}
                  question={element.question}
                  options={element.options}
                  answers={answers}
                  setAnswers={setAnswers}
                />
              ))}
              <input type="submit" value="submit"></input>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
