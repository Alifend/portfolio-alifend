import React from "react";
import styled from "styled-components";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Hobbies from "../components/Hobbies";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Layout from "../layout/Layout";

const Portfolio = () => {
  return (
    <Container>
      <Layout>
        <Profile />
        <Education />
        <Hobbies />
        <Skills />
        <Experiences />
        <Projects />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  /* padding-top: clamp(30px, 5%, 70px); */
  padding: clamp(20px, 5%, 70px);
`;

export default Portfolio;
