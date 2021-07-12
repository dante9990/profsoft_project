import React, { useState } from "react";
import classes from "./counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <div className={classes.container__counter}>{counter}</div>
        <div className={classes.container__button} onClick={handleClick}>
          Перейти на структуры
        </div>
      </div>
    </div>
  );
};
