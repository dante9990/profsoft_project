import React from "react";
import { Main } from "../../Layouts/Main";
import { Wrapper } from "../../Components/Wrapper";
import { Container } from "../../Components/Container";
import { LoginPart } from "../../Components/Login/LoginPart";
import classes from "./login.module.scss";
export const Login = () => {
  return (
    <div className={classes.block}>
      <Main>
        <Wrapper theme={"dark"}>
          <Container>
            <LoginPart />
          </Container>
        </Wrapper>
      </Main>
    </div>
  );
};
