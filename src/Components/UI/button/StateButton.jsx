import React, { useState } from "react";
import classes from "./StateButton.module.css";

const StateButton = ({ children, result, ...props }) => {
  return (
    <button
      {...props}
      className={result == "y" ? classes.buttonYes : classes.buttonNo}
    >
      {children}
    </button>
  );
};

export default StateButton;
