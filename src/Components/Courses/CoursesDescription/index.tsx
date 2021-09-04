import React, { useState } from "react";
import classes from "./coursesDescription.module.scss";
import { courses } from "../../../redux/data";
import { RootStateSelect } from "../../../redux/type";
import {
  changeSelect,
  getSelectFunc,
  changeShowSelect,
} from "../../../redux/actions-create/selectAction";
import { useDispatch, useSelector } from "react-redux";
import { SelectState } from "../../../types/select";
import { ReactComponent as Pic1 } from "../../../assets/pic1.svg";
import { ReactComponent as Pic2 } from "../../assets/pic2.svg";

export const CoursesDescription = () => {
  const state = useSelector<RootStateSelect, SelectState>(
    (state) => state.select
  );
  const dispatch = useDispatch();

  const fitCoursesArr = courses.filter((el) => {
    if (state.value1 === "all" && state.value2 === "all") {
      return el;
    } else if (state.value1 === "all" && state.value2 !== "all") {
      return el.valueDate === state.value2;
    } else if (state.value1 !== "all" && state.value2 === "all") {
      return el.direction === state.value1;
    } else {
      return el.direction === state.value1 && el.valueDate === state.value2;
    }
  });

  return (
    <div className={classes.containerBlock}>
      {fitCoursesArr.map((course: any) => (
        <div className={classes.cardHolder}>
          <div className={classes.courseDescr}>
            <div>
              <div className={classes.select_items}>
                <p className={classes.itemHeader__greyHeader}>
                  Направление подготовки:
                </p>
                <p className={classes.secondItems}>{course.direction}</p>
              </div>
            </div>

            <div className={classes.rightBlock}>
              <div className={classes.select_items}>
                <p className={classes.itemHeader__greyHeader}>
                  Форма обучения:
                </p>
                <p className={classes.secondItems}>{course.form}</p>
              </div>

              <div className={classes.select_items}>
                <p className={classes.itemHeader__greyHeader}>
                  Период обучения:
                </p>
                <p className={classes.secondItems}>
                  {course.dateStart}-{course.dateFinish}
                </p>
              </div>

              <div className={classes.select_items}>
                <p className={classes.itemHeader__greyHeader}>Преподаватель:</p>
                <p className={classes.secondItems}>
                  {course.teacher[0]} {course.teacher[1]} {course.teacher[2]}
                </p>
              </div>
            </div>
            <div className={classes.studied}>
              <div className={classes.select_items}>
                <p className={classes.itemHeader__greyHeader}>Изучение:</p>
                {course.study.map((studied: any) => (
                  <p className={classes.secondItems} key={studied.id}>
                    {studied.name}.
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className={classes.picture}>
            <Pic1 className={classes.pic} />
          </div>
        </div>
      ))}
    </div>
  );
};
