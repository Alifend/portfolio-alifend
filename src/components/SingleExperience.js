import React from "react";
import styled from "styled-components";
const SingleExperience = ({ title, time, at, place, image }) => {
  return (
    <div>
      <Container>
        <Section>
          <Image src={image} />
          <TextContainer>
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
            <Text>{time}</Text>
            <Text style={{ color: "gray" }}>{at}</Text>
            <Text style={{ color: "gray" }}>{place}</Text>
          </TextContainer>
        </Section>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin-top: 40px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Section = styled.div`
  display: flex;
  gap: 15px;
`;

const TextContainer = styled.div``;

const Text = styled.p``;
export default SingleExperience;
