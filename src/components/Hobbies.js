import React from "react";
import styled from "styled-components";
import data from "./HobbiesData";
import HobbyItem from "./HobbyItem";

const Hobbies = () => {
  return (
    <HobbiesContainer>
      <Title>Hobbies</Title>
      {data.map((item, index) => (
        <HobbyItem {...item} key={index} />
      ))}
    </HobbiesContainer>
  );
};

const HobbiesContainer = styled.div`
  grid-area: hobbies;
  width: 100%;
  height: 836px;
  background-color: white;
  border-radius: 12px;
  padding: 22px;
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 29px;
  color: #4f4f4f;
`;
export default Hobbies;
