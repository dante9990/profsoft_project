import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Hamburger } from "../Hamburger";
import { Menu } from "../Menu";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const history = useHistory();
  return (
    <header className={classes.header}>
      <Logo />
      <div>
        <NavLink
          to={"/"}
          exact={true}
          className={classes.header__link}
          activeClassName={classes.header__link__active}
        >
          Академия
        </NavLink>
        <NavLink
          to={"/courses"}
          exact={true}
          className={classes.header__link}
          activeClassName={classes.header__link__active}
        >
          Курсы
        </NavLink>
        <NavLink to={"/login"} className={classes.header__link__entry}>
          Войти
        </NavLink>
      </div>
      <Hamburger />
    </header>
  );
};
