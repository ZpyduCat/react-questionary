import React from "react";
import classes from "./StepProgressBar.module.css";
import SPBItem from "./Item/Item";

const StepProgressBar = ({ curID, answers, Data }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.line}/>
      {Data.map((question) => (
        <SPBItem
          key={question.id}
          active={curID == question.id - 1}
          result={answers ? answers[question.id - 1] : ""}
        >
          {question.id}
        </SPBItem>
      ))}
    </div>
  );
};

export default StepProgressBar;