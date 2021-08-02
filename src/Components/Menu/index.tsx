import React from "react";

import classes from "./menu.module.scss";
import { NavLink } from "react-router-dom";

export const Menu = (active: any, setActive: any) => {
  return (
    <div
      className={
        active ? `${classes.menu} ${classes.active}` : `${classes.menu}`
      }
    >
      <div className={classes.menu__content}>
        <NavLink
          to={"/"}
          exact={true}
          className={classes.menu__link}
          activeClassName={classes.menu__link__active}
        >
          Академия
        </NavLink>
        <NavLink
          to={"/courses"}
          exact={true}
          className={classes.menu__link}
          activeClassName={classes.menu__link__active}
        >
          Курсы
        </NavLink>
        <NavLink to={"/login"} className={classes.menu__link__entry}>
          Войти
        </NavLink>
      </div>
    </div>
  );
};
