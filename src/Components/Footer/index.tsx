import React from "react";
import classes from "./footer.module.scss";
import { Text } from "../Text";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__item}>
        <Text
          type={"gold"}
          text={"profsoft.pro"}
          url={"https://academy.profsoft.pro/"}
        />
        <Text
          type={"gold"}
          text={"https://academy.profsoft.pro/"}
          url={"https://academy.profsoft.pro/"}
        />
      </div>
      <div className={classes.footer__item}>
        <Text type={"white"} text={"vk.com"} url={"vk.com"} />
        <Text type={"white"} text={"facebook.com"} url={"facebook.com"} />
      </div>
      <div className={classes.footer__item}>
        <Text type={"white"} text={"instagram.com"} url={"instagram.com"} />
        <Text type={"white"} text={"youtube.com"} url={"youtube.com"} />
      </div>
      <div className={classes.footer__item}>
        <Text type={"grey"} text={"2021 © LLC Profsoft"} />
        <Text type={"grey"} text={"Публичная оферта"} />
      </div>
    </footer>
  );
};
