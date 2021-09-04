import React from "react";
import { Main } from "../../Layouts/Main";
import { Container } from "../../Components/Container";
import { Wrapper } from "../../Components/Wrapper";
import { CoursesPart } from "../../Components/Courses/CoursesPart";
import { CoursesDescription } from "../../Components/Courses/CoursesDescription";
import { RootStateSelect } from "../../redux/type";
import { SelectState } from "../../types/select";
import { useSelector } from "react-redux";

export const Courses = () => {
  const state = useSelector<RootStateSelect, SelectState>(
    (state) => state.select
  );

  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <CoursesPart />
        </Container>
      </Wrapper>

      <Wrapper theme={"light"}>
        <Container>{state.isShow ? <CoursesDescription /> : null}</Container>
      </Wrapper>
    </Main>
  );
};
