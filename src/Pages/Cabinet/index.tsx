import React from "react";
import { Main } from "../../Layouts/Main";
import { Wrapper } from "../../Components/Wrapper";
import { Container } from "../../Components/Container";
import { Personal } from "../../Components/Personal";
import { MyCourses } from "../../Components/MyCourses";
import { certificates } from "../../redux/data";
import { RootState } from "../../redux/type";
import { ActionState } from "../../types/auth";
import classes from "./cabinet.module.scss";
import { useSelector } from "react-redux";

export interface InputProps {
  data: any;
}

export const Cabinet = () => {
  const state = useSelector<RootState, ActionState>((state) => state.auth);

  const compareUsersAndCertificate = certificates.filter(
    (certificate) =>
      certificate.fullName[0] === state.name[0] &&
      certificate.fullName[1] === state.name[1] &&
      certificate.fullName[2] === state.name[2]
  );

  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <Personal />
        </Container>
      </Wrapper>
      <Wrapper theme={"light"}>
        <Container>
          <>
            <div className={classes.coursesHeader}>
              <p className={classes.coursesHeaderText}>мои курсы</p>
            </div>
            {compareUsersAndCertificate.map((data) => (
              <MyCourses data={data} />
            ))}
          </>
        </Container>
      </Wrapper>
    </Main>
  );
};
