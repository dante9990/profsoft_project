import React from "react";
import classes from "./school.module.scss";

const GenerateSchool = ({ num, str }: any) => {
  return (
    <div className={classes.school__item}>
      <h3 className={classes.school__num}>{num}</h3>
      <span className={classes.school__text}>{str}</span>
    </div>
  );
};

export const School = () => {
  const schoolInfos = [
    {
      id: 1,
      num: "3",
      str: `Школы <br /> разработки`,
    },
    {
      id: 2,
      num: "3",
      str: `Школы <br /> разработки`,
    },
    {
      id: 3,
      num: "3",
      str: `Школы <br /> разработки`,
    },
    {
      id: 4,
      num: "3",
      str: `Школы <br /> разработки`,
    },
  ];
  return (
    <>
      <div className={classes.school}>
        {schoolInfos.map((schoolInfo) => {
          <GenerateSchool
            key={schoolInfo.id}
            num={schoolInfo.num}
            str={schoolInfo.str}
          />;
        })}
        {/*<div className={classes.school__item}>*/}
        {/*  <h3 className={classes.school__num}>3</h3>*/}
        {/*  <span className={classes.school__text}>*/}
        {/*    Школы <br /> разработки*/}
        {/*  </span>*/}
        {/*</div>*/}
        {/*<div className={classes.school__item}>*/}
        {/*  <h3 className={classes.school__num}>8</h3>*/}
        {/*  <span className={classes.school__text}>*/}
        {/*    Направлений <br />*/}
        {/*    обучения*/}
        {/*  </span>*/}
        {/*</div>*/}
        {/*<div className={classes.school__item}>*/}
        {/*  <h3 className={classes.school__num}>435</h3>*/}
        {/*  <span className={classes.school__text}>Записей</span>*/}
        {/*</div>*/}
        {/*<div className={classes.school__item}>*/}
        {/*  <h3 className={classes.school__num}>75</h3>*/}
        {/*  <span className={classes.school__text}>Учеников</span>*/}
        {/*</div>*/}
      </div>
    </>
  );
};
