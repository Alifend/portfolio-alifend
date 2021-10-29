import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <EducationCard>
      <Title>Education</Title>
      <GroupContainer>
        <Name>Universidad de Valle</Name>
        <Description>Systems Engineer | August 2017 - Now</Description>
        <Name>SENA</Name>
        <Description>
          Systems Technician | February 2014 - December 2015
        </Description>
      </GroupContainer>
    </EducationCard>
  );
};

const EducationCard = styled.div`
  grid-area: education;
  border-radius: 12px;
  height: 303px;
  width: 100%;
  background-color: white;
  padding: 23px;
`;
const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #4f4f4f;
  color: #4f4f4f;
  margin-bottom: 20px;
`;
const Name = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #4f4f4f;
  margin-top: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #828282;
`;
export default Education;
