import React, { useState } from "react";
import StateButton from "./UI/button/StateButton";

const QuestionForm = ({ buttonClick, info }) => {
  return (
    <div className="questionForm">
      {info.id}
      <h1>{info.title}</h1>
      <div>{info.content}</div>
      {info.actions.map((action) => 
        <StateButton 
          result = {action.result}
          onClick={ () => buttonClick(action.id - 1, action.result) }
          key = {action.id}
        ></StateButton>
      )}
      
    </div>
  );
};

export default QuestionForm;

/*<StateButton result="y" onClick={() => buttons.buttonYes()}></StateButton>
      <StateButton result="n" onClick={() => buttons.buttonNo()}></StateButton>*/