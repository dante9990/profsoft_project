import React from "react";
import classes from "./footer.module.scss";
import { Text } from "../Text";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerLinks}>
        <p className={classes.fistLinkInGroup}>
          <Text
            theme={"dark"}
            color={"gold"}
            type={"footer"}
            text={"profsoft.pro"}
          />
        </p>
        <Text
          theme={"dark"}
          color={"gold"}
          type={"footer"}
          text={"academy.profsoft.pro"}
        />
      </div>

      <div className={classes.footerLinks}>
        <p className={`${classes.fistLinkInGroup} ${classes.vk}`}>
          <Text
            theme={"dark"}
            color={"white"}
            type={"footer"}
            text={"vk.com"}
            //url={"https://academy.profsoft.pro/"}
          />
        </p>

        <Text
          theme={"dark"}
          color={"white"}
          type={"footer"}
          text={"facebook.com"}
          //url={"https://academy.profsoft.pro/"}
        />
      </div>

      <div className={classes.footerLinks}>
        <p className={classes.instagramLink}>
          <Text
            theme={"dark"}
            color={"white"}
            type={"footer"}
            text={"instagram.com"}
            //url={"https://academy.profsoft.pro/"}
          />
        </p>
        <Text
          theme={"dark"}
          color={"white"}
          type={"footer"}
          text={"youtube.com"}
          //url={"https://academy.profsoft.pro/"}
        />
      </div>

      <div className={classes.footerLinks}>
        <p className={`${classes.fistLinkInGroup} ${classes.vk}`}>
          <Text
            theme={"dark"}
            color={"grey"}
            type={"footer"}
            text={"2021 © LLC Profsoft"}
            //url={"https://academy.profsoft.pro/"}
          />
        </p>
        <Text
          theme={"dark"}
          color={"grey"}
          type={"footer"}
          text={"Публичная оферта"}
          //url={"https://academy.profsoft.pro/"}
        />
      </div>
    </footer>
  );
};
