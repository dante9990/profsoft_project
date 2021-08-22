import React from "react";
import classes from "./directionCards.module.scss";
import { DirectionCardComponent } from "./DirectionCard";
import Image01 from "../../../assets/designCardImg2.jpg";
import Image02 from "../../../assets/designCardImg1.jpg";
import Image04 from "../../../assets/designCardImage03.jpg";
import Image03 from "../../../assets/designCardImage04.jpg";

export const DirectionCardsComponent = () => {
  return (
    <>
      <DirectionCardComponent image01={Image01} image02={Image02} />
      <hr className={classes.hr} />
      <DirectionCardComponent image01={Image03} image02={Image04} />
    </>
  );
};
