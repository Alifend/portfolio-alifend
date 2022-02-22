import React from "react";
import styled from "styled-components";
import SingleExperience from "./SingleExperience";
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
    at: "Consultora C&O - Jornada completa jun.",
    time: " 2021 - actualidad - 9 meses",
    place: "Cali, Valle del Cauca, Colombia",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHmpU9Okf0LJg/company-logo_200_200/0/1580494914832?e=1653523200&v=beta&t=HIG3wgkYyGtWXv4UDci5p3T7TBcQMH3byXYFQnyMjlM",
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
