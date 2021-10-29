import React from "react";
import styled from "styled-components";

const HobbyItem = ({ img, title, description }) => {
  return (
    <Card>
      <Image src={img} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 36px;
`;

const Image = styled.img`
  border-radius: 12px;
  height: 139px;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin: 10px 0px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #828282;
`;
export default HobbyItem;
