import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    input: {
      width: "420px",
      marginTop: "25px",
      marginBottom: "25px",
    },
  })
);

export const LoginComponent = () => {
  const classes = useStyles();
  return (
    <>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </>
  );
};
