import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: clamp(85%, 100% - 150px, 95%);
  height: auto;
  display: grid;
  grid-template-columns: 39% 59%;
  grid-template-rows: 311px 303px 312px 482px auto;
  grid-template-areas:
    "profile profile"
    "education skills"
    "hobbies skills"
    "hobbies experience"
    "carrousel carrousel";
  gap: 42px;
  @media (max-width: 1000px) {
    width: 95%;
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      "profile"
      "education"
      "hobbies"
      "skills"
      "experience"
      "carrousel";
    gap: 42px;
  }
`;
export default Layout;
