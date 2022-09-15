import React, { useState } from "react";
import StateButton from "../UI/Button/StateButton";
import classes from "./QuestionForm.module.css";

const QuestionForm = ({ buttonClick, question }) => {
  return (
    <div className={classes.questionForm}>
      <div className={classes.questionID}> {question.id}</div>
      <h1>{question.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: question.content }}></div>

      {question?.actions?.map((action) => (
        <StateButton
          result={action.result}
          onClick={() => buttonClick(action.id - 1, action.result)}
          key={action.id}
        >
          {action.title}
        </StateButton>
      ))}
    </div>
  );
};

export default QuestionForm;
