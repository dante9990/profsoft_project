import React, { useState } from "react";
import classes from "./selectCourses.module.scss";
import { ReactComponent as Select } from "../../../assets/selectInput.svg";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import { SelectType } from "../../../types/selects";

export const SelectCoursesComponent = () => {
  const initialState = {
    selectDir: {
      id: 0,
      isActive: false,
      initialValue: "выберите курс",
      links: [
        { key: "01", value: "все" },
        { key: "02", value: "Frontend" },
        { key: "03", value: "Backend" },
        { key: "04", value: "iOS" },
        { key: "05", value: "Android" },
        { key: "06", value: "Design" },
        { key: "07", value: "QA" },
        { key: "08", value: "PM" },
      ],
    },
    selectPer: {
      id: 1,
      isActive: false,
      initialValue: "период",
      links: [
        { key: "01", value: "месяц" },
        { key: "02", value: "два" },
        { key: "03", value: "три" },
        { key: "04", value: "четыре" },
      ],
    },
  };

  const [state, setState] = useState(initialState);

  const changeState = (idButton: number) => {
    const newState = {
      selectDir: {
        ...state.selectDir,
        isActive:
          idButton === 0 ? !state.selectDir.isActive : state.selectDir.isActive,
      },
      selectPer: {
        ...state.selectPer,
        isActive:
          idButton === 1 ? !state.selectPer.isActive : state.selectPer.isActive,
        initialValue: state.selectPer.initialValue,
      },
    };

    setState(newState);
  };

  const changeValue = (value: string, idButton: number) => {
    const newState = {
      selectDir: {
        ...state.selectDir,
        isActive:
          idButton === 0 ? !state.selectDir.isActive : state.selectDir.isActive,
        initialValue: idButton === 0 ? value : state.selectDir.initialValue,
      },
      selectPer: {
        ...state.selectPer,
        isActive:
          idButton === 1 ? !state.selectPer.isActive : state.selectPer.isActive,
        initialValue: idButton === 1 ? value : state.selectPer.initialValue,
      },
    };

    setState(newState);
  };

  const showSelect = (select: SelectType) => {
    return (
      <>
        <div className={classes.containerBlock}>
          <button
            className={
              select.isActive ? classes.activeSelectBlock : classes.selectBlock
            }
            onClick={() => changeState(select.id)}
          >
            <p className={classes.selectInfo}>{select.initialValue}</p>

            {select.isActive ? (
              <Select className={classes.activeSelect} />
            ) : (
              <Select className={classes.select} />
            )}
            {select.isActive ? (
              <span className={classes.rectangle}></span>
            ) : null}
          </button>
          {select.isActive ? (
            <div className={classes.additionalInformation}>
              {select.links.map((item) => {
                return (
                  <p onClick={() => changeValue(item.value, select.id)}>
                    {item.value}
                  </p>
                );
              })}
            </div>
          ) : null}
        </div>
      </>
    );
  };

  return (
    <>
      <h2 className={classes.coursesTitle}>
        курсы <span>ProfSoft Academy</span>
      </h2>
      <p className={classes.trainingInfo}>
        Пройди обучение и получи сертификат
        <br /> подтверждающий квалификацию
      </p>
      <div className={classes.selectBar}>
        {showSelect(state.selectDir)}
        {showSelect(state.selectPer)}
        <button className={classes.arrow}>
          <Arrow />
        </button>
      </div>
    </>
  );
};
