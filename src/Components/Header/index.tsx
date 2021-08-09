import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Hamburger } from "../Hamburger";
import { Menu } from "../Menu";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, RootState } from "../../redux/type";
import { logoutAction } from "../../redux/actions/authAction";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const history = useHistory();
  const state = useSelector<RootState, AuthState>((state) => state.auth);
  const dispatch = useDispatch();
  const setLogout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("userData");
  };
  return (
    <header className={classes.header}>
      <NavLink to={"/"} exact={true}>
        <Logo className={classes.logo} />
      </NavLink>

      <div className={classes.header__menu}>
        <a
          href={"https://academy.profsoft.pro/"}
          className={classes.header__link}
        >
          Академия
        </a>
        <NavLink
          to={"/courses"}
          exact={true}
          className={classes.header__link}
          activeClassName={classes.header__link__active}
        >
          Курсы
        </NavLink>
        <NavLink
          to={state.login ? "/" : "/login"}
          className={classes.header__link__entry}
          onClick={setLogout}
        >
          {state.login ? "Выйти" : "Войти"}
        </NavLink>

        <Hamburger />
      </div>
    </header>
  );
};
