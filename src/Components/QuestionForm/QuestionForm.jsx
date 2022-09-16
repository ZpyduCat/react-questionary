import React from "react";
import StateButton from "../UI/Button/StateButton";
import classes from "./QuestionForm.module.css";

const QuestionForm = ({ buttonClick, question }) => {
  return (
    <div className={classes.questionForm}>
      <div className={classes.questionID}> {question.id}</div>
      <h2>{question.title}</h2>
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
