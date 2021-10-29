import React from "react";
import styled from "styled-components";

const RightSection = ({ children }) => {
  return <Right>{children}</Right>;
};

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  padding-top: 43px;
  padding-left: 18px;
  padding-bottom: 43px;

  gap: 35px;
`;

export default RightSection;
