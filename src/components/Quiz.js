// import './App.css';
import QuesList from './QuesList';
import { useState } from 'react';

function Quiz() {

  function submitHandler (){
    setIsShowAns(!isShowAns);
  }

  const [isShowAns , setIsShowAns] = useState(false);
  return (
    <div className="App">
      <h1>Quiz Game</h1>
      <QuesList isShowAns={isShowAns} setIsShowAns={setIsShowAns}/>
    </div>
  );
}

export default Quiz;
