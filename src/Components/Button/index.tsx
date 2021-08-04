import React from "react";
import classes from "./button.module.scss";

export const Button = () => {
  const scroll = () => {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={classes.btn} onClick={scroll}>
        Проверить сертификат
      </div>
    </>
  );
};
