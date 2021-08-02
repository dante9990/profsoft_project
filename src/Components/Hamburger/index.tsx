import React from "react";

import classes from "./hamburger.module.scss";

export const Hamburger = (onClick: any) => {
  return (
    <>
      <div className={classes.burger__btn}>
        <span />
      </div>
    </>
  );
};
