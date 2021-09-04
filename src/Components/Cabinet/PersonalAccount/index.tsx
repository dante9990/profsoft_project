import React, { useState } from "react";
import { RootState } from "../../../redux/type";
import { ActionState } from "../../../types/auth";
import { useDispatch, useSelector } from "react-redux";
import classes from "./personalAccount.module.scss";
import { ReactComponent as UserPic } from "../../../assets/userPic.svg";

export const PersonalAccount = () => {
  const state = useSelector<RootState, ActionState>((state) => state.auth);

  return (
    <div className={classes.userBlock}>
      <div className={classes.userContainer}>
        <UserPic className={classes.userPic} />
        <div className={classes.userInfoContainer}>
          <div className={classes.userNameContainer}>
            <p className={`${classes.userName} ${classes.surname}`}>
              {state.name[0]}
            </p>
            <p className={classes.userName}>{state.name[1]}</p>
          </div>
          <p className={classes.userName}>{state.name[2]}</p>
          <p className={classes.userLogin}>{state.login}</p>
        </div>
      </div>
    </div>
  );
};
