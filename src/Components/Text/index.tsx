import React, { FC, ReactElement } from "react";
import classes from "./text.module.scss";

interface Props {
  theme: "light" | "dark";
  color?: "gold" | "white" | "grey" | "black";
  type:
    | "mainHeader"
    | "mainHeaderLogin"
    | "secondHeader"
    | "description"
    | "footer"
    | "box"
    | "numbers"
    | "numbersText"
    | "textUnderHeader"
    | "inputText";
  text?: ReactElement | string;
  url?: string;
}

export const Text: FC<Props> = ({ theme, color, type, text, url }: Props) => {
  const handleTheme = (t: string) => {
    if (color !== "gold") {
      switch (t) {
        case "light":
          return classes.text__black;
        case "dark":
          return classes.text__white;
      }
    } else {
      return classes.text__gold;
    }
  };
  const handleType = (t: string) => {
    switch (t) {
      case "mainHeader":
        return classes.text__main_header;
      case "mainHeaderLogin":
        return classes.text__main_header_login;
      case "secondHeader":
        return classes.text__second_header;
      case "description":
        return classes.text__description_text;
      case "footer":
        return classes.text__footer_links;
      case "box":
        return classes.text__box_items;
      case "numbers":
        return classes.text__numbers;
      case "numbersText":
        return classes.text__text_for_numbers;
      case "textUnderHeader":
        return classes.text__greyText_under_main_header;
      case "inputText":
        return classes.text__inputText;
    }
  };

  return url ? (
    <a className={`${handleTheme(theme)} ${handleType(type)}`} href={url}>
      {text}
    </a>
  ) : (
    <p className={`${handleTheme(theme)} ${handleType(type)}`}>{text}</p>
  );
};
