import React, { FC, ReactElement } from "react";
import classes from "./container.module.scss";

interface Props {
  children: ReactElement | string | null;
}
export const Container: FC<Props> = ({ children }: Props) => (
  <div className={classes.container}>{children}</div>
);
