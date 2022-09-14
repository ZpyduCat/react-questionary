import React, { useState } from "react";
import QuestionForm from "./Components/Question Form/QuestionForm";
import StepProgressBar from "./Components/Step Progress Bar/StepProgressBar";
import Questions from "./questions.json";

function App() {
  const [info, setInfo] = useState(Questions[0]);
  const [curID, setCurID] = useState(0);
  const [answers, setAnswers] = useState([]);

  function buttonClick(id, result) {
    let nextSteps = Questions[curID].actions[id].nextStep;
    let arrID = nextSteps[0].id - 1;

    let skipAll = false;
    nextSteps.forEach((step) => {
      if (skipAll) return;
      let correctAnswers = 0;
      arrID = step.id - 1;

      if (step.conditions) {
        step.conditions.forEach((condition) => {
          let cid = condition.id - 1;
          if (answers[cid] == condition.result) correctAnswers += 1;
        });

        if (correctAnswers == step.conditions.length) {
          skipAll = true;

          setInfo(Questions[arrID]);
          setCurID(arrID);
          return;
        }
      } else {
        setInfo(Questions[arrID]);
        setCurID(arrID);
      }
    });

    setAnswers([...answers, result]);
  }
  return (
    <div className="main">
      <StepProgressBar curID={curID} answers={answers} Data={Questions}> </StepProgressBar> 
      <QuestionForm buttonClick={buttonClick} info={info}>
        {" "}
      </QuestionForm>
    </div>
  );
}

export default App;
