import React from "react";
import classes from "./SPBItem.module.css";

const SPBItem = ({ children, active, result }) => {
  let counterClass = classes.counter;
  let itemClass = classes.item;
  if (active) counterClass += " " + classes.active;
  if (result == "y") {
    itemClass += " " + classes.yes;
    counterClass += " " + classes.yes;
  } else if (result == "n") {
    itemClass += " " + classes.no;
    counterClass += " " + classes.no;
  }

  return (
    <div className={itemClass}>
      <div className={counterClass}>{children}</div>
    </div>
  );
};

export default SPBItem;
