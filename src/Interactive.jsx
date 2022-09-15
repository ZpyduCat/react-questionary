import React, { useState } from "react";
import QuestionForm from "./Components/Question Form/QuestionForm";
import StepProgressBar from "./Components/Step Progress Bar/StepProgressBar";

const Interactive = ({questions}) => {
  const [curID, setCurID] = useState(0);
  const [answers, setAnswers] = useState([]);

  function buttonClick(id, result) {
    let nextSteps = questions[curID].actions[id].nextStep;
    let arrID = nextSteps[0].id - 1;

    let skipAll = false;
    nextSteps.forEach((step) => {
      if (skipAll) return;
      let correctAnswers = 0;
      arrID = step.id - 1;

      if (step.conditions) {
        step.conditions.forEach((condition) => {
          let cid = condition.id - 1;
          if (answers[cid] === condition.result) correctAnswers += 1;
        });

        if (correctAnswers === step.conditions.length) {
          skipAll = true;

          setCurID(arrID);
          return;
        }
      } else {
        setCurID(arrID);
      }
    });

    setAnswers([...answers, result]);
  }
  return (
    <div className="main">
      <StepProgressBar curID={curID} answers={answers} questions={questions}/> 
      <QuestionForm buttonClick={buttonClick} info={questions[curID]} />
    </div>
  );
}

export default Interactive;