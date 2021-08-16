import React from "react";
import { Main } from "../../Layouts/Main";
import { Wrapper } from "../../Components/Wrapper";
import { Container } from "../../Components/Container";
import { LoginCom } from "../../Components/Login";
import classes from "./login.module.scss";
export const Login = () => {
  return (
    <div className={classes.block}>
      <Main>
        <Wrapper theme={"dark"}>
          <Container>
            <LoginCom />
          </Container>
        </Wrapper>
      </Main>
    </div>
  );
};
