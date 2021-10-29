import React from "react";
import styled from "styled-components";
import Studying from "../assets/studying.jpg";
const Experiences = () => {
  return (
    <ExperiencesContainer>
      <Title>Experiences</Title>
      <Content>
        <Image src={Studying} />
        <Description>
          Not yet, but I am learning every day so we can work together :)
        </Description>
      </Content>
    </ExperiencesContainer>
  );
};

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

const Image = styled.img`
  width: 85%;
  height: 85%;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin: 20px;
`;

const Description = styled.p`
  text-align: center;
`;

const Content = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80%;
`;
export default Experiences;
