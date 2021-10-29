import React from "react";
import styled from "styled-components";

const ProjectCard = ({ image, tags, title, description, demoURL, codeURL }) => {
  return (
    <Card>
      <a
        href={demoURL}
        target="_blank"
        rel="noreferrer"
        style={{ width: "100%", height: "35%" }}
      >
        <Image src={image} />
      </a>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}> #{tag} </Tag>
        ))}
      </TagsContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonsContainer>
        <a href={demoURL} target="_blank" rel="noreferrer">
          <DemoButton>Demo</DemoButton>
        </a>
        <a href={codeURL} target="_blank" rel="noreferrer">
          <CodeButton>Code</CodeButton>
        </a>
      </ButtonsContainer>
    </Card>
  );
};

const Card = styled.div`
  /* width: 100%; */
  margin-left: auto;
  margin-right: auto;

  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: clamp(300px, 90%, 330px);
  height: 568px;
  padding: 18.49px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: filter 0.3s ease;
  &:hover {
    filter: opacity(0.7);
  }
`;
const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
const Tag = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #4f4f4f;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #333333;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #828282;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
`;

const DemoButton = styled.button`
  background: #2f80ed;
  border-radius: 12px;
  padding: 13px 40px;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  transition: filter 0.3s ease;
  &:hover {
    filter: opacity(0.7);
  }
`;
const CodeButton = styled.button`
  background: #ffffff;
  border-radius: 12px;
  padding: 13px 40px;
  color: #2f80ed;
  border: 1px solid #2f80ed;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  transition: filter 0.3s ease;
  &:hover {
    filter: opacity(0.7);
  }
`;
export default ProjectCard;
