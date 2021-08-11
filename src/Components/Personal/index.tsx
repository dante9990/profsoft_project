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
          <div className={classes.personal__username}>
            <p className={classes.personal__name}>{state.name[0]}</p>
            <p className={classes.personal__name}>{state.name[1]}</p>
            <p className={classes.personal__name}>{state.name[2]}</p>
          </div>

          <p className={classes.personal__email}>{state.login}</p>
        </div>
      </div>
    </>
  );
};
