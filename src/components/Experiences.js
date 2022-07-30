import React from "react";
import styled from "styled-components";
import SingleExperience from "./SingleExperience";
import C_O from "../assets/c_o.jpg";
import Freelance from "../assets/freelance.png";
const Experiences = () => {
  return (
    <ExperiencesContainer>
      <Title>Experiences</Title>
      {data.map((element, index) => (
        <SingleExperience key={index} {...element} />
      ))}
    </ExperiencesContainer>
  );
};

const data = [
  {
    title: "Ingeniero Junior Full Stack ",
    at: "Consultora C&O",
    time: "Jun. 2021 - Jul. 2022",
    place: "Cali, Valle del Cauca, Colombia",
    image: C_O,
  },
  {
    title: "Freelance",
    at: "",
    time: "Jul. 2022 - Now",
    place: "El Cerrito, Valle del Cauca, Colombia",
    image: Freelance,
  },
];

const ExperiencesContainer = styled.div`
  grid-area: experience;
  background-color: white;
  border-radius: 12px;
  padding: 17px 31px;
  height: auto;
`;

const Title = styled.p`
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  color: #4f4f4f;
  margin-right: auto;
`;

export default Experiences;
