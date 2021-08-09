import React, { useContext, useEffect } from "react";

import { Main } from "../../Layouts/Main";
// import { Container } from "../../Components/index";
// import { Wrapper } from "../../Components/Wrapper";
// import { Information } from "../../Components/Information";
// import { CertificateCom } from "../../Components/Certificate";
// import { Directions } from "../../Components/Directions";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, RootState } from "../../redux/type";
import { loginAction, logoutAction } from "../../redux/actions/authAction";
import { Button } from "@material-ui/core";
import {
  CertificateCom,
  Container,
  Directions,
  Information,
  Wrapper,
} from "../../Components";

export const Content = () => {
  return (
    <div>
      <h1>В команду твоей мечты</h1>
    </div>
  );
};

export const Landing = () => {
  const state = useSelector<RootState, AuthState>((state) => state.auth);
  const dispatch = useDispatch();
  const setLogin = () => {
    const data = { login: "testLogin", name: "Petr", token: "testToken" };
    dispatch(loginAction(data));
    localStorage.setItem("userData", JSON.stringify(data));
  };
  const setLogout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("userData");
  };
  // useEffect(()=> {
  //     dispatch(
  //         loginAction({login: 'testLogin', name: 'Petr', token: 'testToken'})
  //     )
  // }, [])
  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <Information />
        </Container>
      </Wrapper>
      <Wrapper theme={"light"}>
        <Container>
          <CertificateCom />
        </Container>
      </Wrapper>
      <Wrapper theme={"dark"}>
        <Container>
          <Directions />
        </Container>
      </Wrapper>
      {/*  <Button onClick={setLogin}>Auth</Button>*/}
      {/*  <Button onClick={setLogout}>Exit</Button>*/}
      {/*  <>*/}
      {/*{state.name ? (*/}
      {/*  <p style={{ color: "#000" }}>Вас зовут: {state.login}</p>*/}
      {/*) : (*/}
      {/*  <p>вы не авторизованы</p>*/}
      {/*)}*/}
      {/*  </>*/}
    </Main>
  );
};
