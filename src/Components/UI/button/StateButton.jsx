import React, {useState} from "react";
import classes from "./StateButton.module.css"

const StateButton = (props) => {
    let btnClass = classes.buttonNo;
    let btnName = "Нет"

    if(props.result == "y"){
        btnClass = classes.buttonYes;
        btnName = "Да";
    }

    return(
        <button {...props} className={btnClass}>
            {btnName}
        </button>
    );

};

export default StateButton;