import React, { useState } from "react";
import "react-dropdown/style.css";
import classes from "./coursesPart.module.scss";
import { Text } from "../../Text";
import { Link } from "react-scroll";
import { Buttons } from "../../Button";
import { Formik, Field, Form } from "formik";
import Dropdown from "react-dropdown";
import { ReactComponent as SelectDown } from "../../../assets/arrows crosses and other/selectorDown.svg";
import { ReactComponent as SelectUp } from "../../../assets/arrows crosses and other/selectorUp.svg";
import { RootStateSelect } from "../../../redux/type";
import {
  changeSelect,
  getSelectFunc,
  changeShowSelect,
  deleteSelect,
} from "../../../redux/actions-create/selectAction";
import { useDispatch, useSelector } from "react-redux";
import { SelectState } from "../../../types/select";
import * as Yup from "yup";
import { CoursesDescription } from "../CoursesDescription";

export const CoursesPart = () => {
  const [selector1State, setSelector1] = useState(-1);
  const [selector2State, setSelector2] = useState(-1);
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [blockedButton, setBlockedButton] = useState(false);
  const state = useSelector<RootStateSelect, SelectState>(
    (state) => state.select
  );

  const blockButton = async () => {
    setBlockedButton(!blockedButton);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClick2 = () => {
    setClicked2(!clicked2);
  };

  const handleCross = async () => {
    await dispatch(deleteSelect());
    setBlockedButton(!blockedButton);
    setSelector1(-1);
    setSelector2(-1);
  };

  const handleSubmit = async () => {
    await blockButton();
    selector1State !== -1 && selector2State !== -1
      ? await dispatch(
          changeShowSelect({
            id1: state.id1,
            id2: state.id2,
            value1: state.value1,
            value2: state.value2,
            label1: state.label1,
            label2: state.label2,
            isShow: state.isShow,
          })
        )
      : setBlockedButton(false);
  };

  const setNewStateSelect1 = async (id: number) => {
    setClicked(false);
    setSelector1(id);
    if (!blockedButton) {
      await dispatch(
        changeSelect({
          id1: id,
          id2: state.id2,
          value1: options.select1.array[id].value,
          value2: state.value2,
          label1: options.select1.array[id].label,
          label2: state.label2,
          isShow: state.isShow,
        })
      );
    }
  };

  const setNewStateSelect2 = async (id: number) => {
    setClicked2(false);
    setSelector2(id);
    if (!blockedButton) {
      await dispatch(
        changeSelect({
          id1: state.id1,
          id2: id,
          value1: state.value1,
          value2: options.select2.array[id].value,
          label1: state.label1,
          label2: options.select2.array[id].label,
          isShow: state.isShow,
        })
      );
    }
  };

  const options = {
    select1: {
      id: 0,
      value: 0,
      initialValue: "Выберите курс",
      array: [
        { id: 0, value: "all", label: "Все" },
        { id: 1, value: "front", label: "Frontend" },
        { id: 2, value: "Design", label: "Design" },
        { id: 3, value: "back", label: "Backend" },
        { id: 4, value: "ios", label: "ios" },
        { id: 5, value: "android", label: "Android" },
        { id: 6, value: "qa", label: "QA" },
        { id: 7, value: "pm", label: "PM" },
      ],
    },
    select2: {
      id: 1,
      value: 1,
      initialValue: "Период",
      array: [
        { id: 0, value: "all", label: "Все" },
        { id: 1, value: "summer", label: "Лето" },
        { id: 2, value: "autumn", label: "Осень" },
      ],
    },
  };

  return (
    <>
      <div className={state.isShow ? classes.textPartSmall : classes.textPart}>
        <div className={classes.coursesHeader}>
          <p className={classes.descriptionHeader_1}>
            <Text
              theme={"dark"}
              color={"white"}
              type={"mainHeader"}
              text={"Курсы"}
            />
          </p>

          <p className={classes.descriptionHeader_2}>
            <Text
              theme={"dark"}
              color={"gold"}
              type={"mainHeader"}
              text={"profsoft academy"}
            />
          </p>
        </div>
        <div className={classes.descr_text_1}>
          <Text
            theme={"dark"}
            color={"grey"}
            type={"textUnderHeader"}
            text={"Пройди обучение и получи сертификат"}
          />
        </div>

        <div className={classes.descr_text_2}>
          <Text
            theme={"dark"}
            color={"grey"}
            type={"textUnderHeader"}
            text={"подтвержадющий квалификацию"}
          />
        </div>
        <div
          className={
            state.isShow ? classes.yellowButtonMargin : classes.yellowButton
          }
        >
          <Formik
            initialValues={{ select1: "", select2: "" }}
            onSubmit={!blockedButton ? handleSubmit : handleCross}
          >
            <Form>
              <div className={classes.select}>
                <div className={classes.select1} onClick={handleClick}>
                  <div className={`${classes.selector} ${classes.selector1}`}>
                    {state.label1}
                    {clicked ? (
                      <SelectUp className={classes.selectDown} />
                    ) : (
                      <SelectDown className={classes.selectDown} />
                    )}
                  </div>

                  {clicked ? (
                    <div className={`${classes.menuDropDown} ${classes.menu1}`}>
                      {options.select1.array.map((feature: any) => (
                        <p
                          key={feature.id}
                          className={classes.menuItem}
                          onClick={() => setNewStateSelect1(feature.id)}
                        >
                          {feature.label}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {clicked ? <div className={classes.abstract}></div> : null}
                </div>
                <div className={classes.select2} onClick={handleClick2}>
                  <div className={`${classes.selector} ${classes.selector1}`}>
                    {state.label2}
                    {clicked2 ? (
                      <SelectUp className={classes.selectDown} />
                    ) : (
                      <SelectDown className={classes.selectDown} />
                    )}
                  </div>

                  {clicked2 ? (
                    <div className={`${classes.menuDropDown} ${classes.menu2}`}>
                      {options.select2.array.map((feature: any) => (
                        <p
                          key={feature.id}
                          className={classes.menuItem}
                          onClick={() => setNewStateSelect2(feature.id)}
                        >
                          {feature.label}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {clicked2 ? <div className={classes.abstract}></div> : null}
                </div>
                {!blockedButton ? (
                  <button
                    type={"submit"}
                    className={classes.white_arr}
                    //onSubmit={handleSubmit}
                    //disabled={state.in_progress}
                  />
                ) : null}
                {blockedButton &&
                selector1State !== -1 &&
                selector2State !== -1 ? (
                  <button
                    type={"submit"}
                    className={classes.white_cross}
                    //disabled={state.in_progress}
                  />
                ) : null}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
