import React from "react";
import classes from "./personal.module.scss";
import { useSelector } from "react-redux";
import { AuthState, RootState } from "../../redux/type";

export const Personal = () => {
  const state = useSelector<RootState, AuthState>((state) => state.auth);
  return (
    <>
      <div className={classes.personal}>
        <div className={classes.personal__img} />
        <div className={classes.personal__info}>
          <h1 className={classes.personal__name}>{state.name}</h1>
          <p className={classes.personal__email}>{state.login}</p>
        </div>
      </div>
    </>
  );
};
