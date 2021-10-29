import React from "react";
import styled from "styled-components";

const LeftSection = ({ children }) => {
  return <Left>{children}</Left>;
};

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
  padding-top: 43px;
  padding-right: 18px;
  padding-bottom: 43px;
  gap: 35px;
`;
export default LeftSection;
