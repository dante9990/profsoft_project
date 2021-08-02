import React, { useState } from "react";
import classes from "./input.module.scss";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";

export const Input = () => {
  const [input, setInput] = useState("");

  const inputChange = (e: any) => {
    if (e.target) {
      setInput(e.target.value);
    }
  };

  const { values, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      input: "",
    },
    onSubmit: () => {
      console.log(values.input);
    },
  });

  return (
    <>
      <NumberFormat
        className={classes.input}
        value={values.input}
        type={"text"}
        displayType={"input"}
        format="##-#####-#######"
        onValueChange={(values) => {
          const { formattedValue, value } = values;
          // formattedValue = $2,223
          // value ie, 2223
          setInput(value);
        }}
      />
    </>
  );
};
