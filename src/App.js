import React, { useState } from "react";
import QuestionForm from "./Components/QuestionForm";
import Data from "./questions.json";

/*const test = { id: 3, title: "Title", content: "sus" };
const test2 = { id: 4, title: "Title2", content: <h2> I'm not dumb</h2> };
const test3 = { id: 5, title: "Title3", content: "red" };*/

Data.forEach((question) => {
  if (!question.actions) question.actions = []; // фикс если нету действий, чтобы форма не ломалась
});

function App() {
  const [info, setInfo] = useState(Data[0]);
  const [curID, setCurID] = useState(0);
  const [answers, setAnswers] = useState([]);

  function buttonClick(id, result) {
    let nextSteps = Data[curID].actions[id].nextStep;
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

          setInfo(Data[arrID]);
          setCurID(arrID);
          return;
        }
      } else {
        setInfo(Data[arrID]);
        setCurID(arrID);
      }
    });

    setAnswers([...answers, result]);
  }
  return (
    <div className="main">
      <QuestionForm buttonClick={buttonClick} info={info}>
        {" "}
      </QuestionForm>
    </div>
  );
}

export default App;
