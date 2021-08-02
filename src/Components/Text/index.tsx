import React, { FC } from "react";
import classes from "./text.module.scss";
interface Props {
  type: "gold" | "white" | "grey";
  text: string;
  url?: string;
}
export const Text: FC<Props> = ({ type, text, url }: Props) => {
  const handle = (t: string) => {
    switch (t) {
      case "gold":
        return classes.text__gold;
      case "white":
        return classes.text__white;
      case "grey":
        return classes.text__grey;
    }
  };
  return url ? (
    <a className={handle(type)} href={url}>
      {text}
    </a>
  ) : (
    <p className={handle(type)}>{text}</p>
  );
};
