import React from "react";
import { Container, Login, Wrapper } from "../../Components";
import { Main } from "../../Layouts/Main";

export const LoginPage = () => {
  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <Login />
        </Container>
      </Wrapper>
    </Main>
  );
};
