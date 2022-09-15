import React, { useState } from "react";
import StateButton from "../UI/Button/StateButton";
import classes from "./QuestionForm.module.css";

const QuestionForm = ({ buttonClick, info }) => {
  return (
    <div className={classes.questionForm}>
      <div className={classes.questionID}> {info.id}</div>
      <h1>{info.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: info.content }}></div>

      {info?.actions?.map((action) => (
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
