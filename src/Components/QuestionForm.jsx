import React, {useState} from "react";
import StateButton from "./UI/button/StateButton";

const QuestionForm = (props) => {

    return(
        <div className="questionForm">
            {props.info.id}
            <h1>{props.info.title}</h1>
            <div>{props.info.desc}</div>
            <StateButton result="y" onClick={() => props.buttons.buttonYes()}></StateButton>
            <StateButton result="n" onClick={() => props.buttons.buttonNo()}></StateButton>
        </div>
    );

};

export default QuestionForm;