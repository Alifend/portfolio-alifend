import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <SkillsCard>
      <AnotherTitle>Skills </AnotherTitle>
      <Title>Frontend</Title>
      <SkillsGroup>
        {SkillsData.frontend.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </SkillsGroup>
      <Title>Backend</Title>
      <SkillsGroup>
        {SkillsData.backend.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </SkillsGroup>
      <Title>Languages</Title>
      <SkillsGroup>
        {SkillsData.languages.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </SkillsGroup>
      <Title>Tools</Title>
      <SkillsGroup>
        {SkillsData.tools.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </SkillsGroup>
      <Description>
        I've been learning about AWS, I've deployed express applications on EC2
        and also used Lambda functions to get and post data from a DynamoDB
        database
      </Description>
    </SkillsCard>
  );
};

const SkillsCard = styled.div`
  border-radius: 12px;
  height: auto;
  width: 100%;
  background-color: white;
  padding: 23px;
  grid-area: skills;
`;

const AnotherTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #4f4f4f;
  margin-bottom: 30px;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #4f4f4f;
  margin-top: 20px;
`;

const Item = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f;
  border-radius: 12px;
  background-color: #2f80ed;
  color: white;
  padding: 5px 10px;
`;

const SkillsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px 0px;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  margin-top: 20px;
`;
const SkillsData = {
  frontend: [
    "HTML",
    "CSS",
    "React",
    "Redux",
    "Vue",
    "Bootstrap",
    "styled-components",
  ],
  backend: ["Django", "Nodejs", "Expressjs", "JWT", "SQL", "NOSQL"],
  languages: ["Javascript", "Python", "Java", "C++"],
  tools: ["Git", "Github"],
};
export default Skills;
