import React from "react";
import { Container } from "../Container";
import { Header } from "../Header";
import classes from "./mobileMenu.module.scss";
import { ReactComponent as MenuCross } from "../../assets/menuCross.svg";
import { Text } from "../Text";

export interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = (props: Props) => {
  return (
    <div className={props.active ? classes.menu__active : classes.menu}>
      <Container>
        <div className={classes.menu_header}>
          <Header active={props.active} setActive={props.setActive} />
          <div className={classes.blockForCross}>
            <MenuCross
              className={classes.menuCross}
              onClick={() => props.setActive(false)}
            />
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.menu_h1}>
            <Text theme={"light"} type={"mainHeader"} text={"Menu"} />
          </div>
          <div className={classes.menu_items}>
            <p className={classes.menu_item}>
              <Text theme={"light"} type={"numbersText"} text={"Академия"} />
            </p>
            <p className={classes.menu_item}>
              <Text theme={"light"} type={"numbersText"} text={"Курсы"} />
            </p>
            <p>
              <Text theme={"light"} type={"numbersText"} text={"Войти"} />
            </p>
          </div>
        </div>
        <div className={classes.menu_footer}>
          <p className={`${classes.footer_item} `}>profsoft.pro</p>
          <p className={classes.footer_item}>academy.profsoft.pro</p>
        </div>
      </Container>
    </div>
  );
};
