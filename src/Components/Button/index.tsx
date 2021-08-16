import classes from "../Button/buttton.module.scss";
import React, { FC, ReactElement, EventHandler } from "react";

interface Props {
  type: "yellow" | "emptyGrey";
  text: ReactElement | string;
  url?: EventHandler<any>;
}

export const Buttons: FC<Props> = ({ type, text, url }: Props) => {
  const handleYellow = (target: any) => {
    target.classList.toggle(classes.button__yellow_disabled);
  };

  const handleStatus = (target: any, t: string) => {
    switch (t) {
      case "yellow": {
        return handleYellow(target);
      }
    }
  };

  const handleColor = (t: string) => {
    switch (t) {
      case "yellow": {
        return classes.button__yellow;
      }
      case "emptyGrey":
        return classes.button__emptyGrey;
    }
  };

  return (
    <button
      className={handleColor(type)}
      onClick={({ target }) => handleStatus(target, type)}
    >
      {text}
    </button>
  );
};
