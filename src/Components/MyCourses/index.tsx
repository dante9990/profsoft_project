import React from "react";
import classes from "./myCourses.module.scss";
import { OpenBlock } from "../OpenBlock";

export const MyCourses = () => {
  return (
    <>
      <div className={classes.myCourses}>
        <h2 className={classes.myCourses__title}>мои курсы</h2>
        <OpenBlock show={true} />
      </div>
    </>
  );
};
