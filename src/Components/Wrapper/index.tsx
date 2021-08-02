import React, { FC, ReactElement } from "react";
import classes from "./wrapper.module.scss";

interface Props {
  children: ReactElement | string;
  theme: "dark" | "light";
}
export const Wrapper: FC<Props> = ({ children, theme }: Props) => (
  <section
    className={theme === "dark" ? classes.wrapper_black : classes.wrapper_White}
  >
    {children}
  </section>
);
