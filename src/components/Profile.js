import React from "react";
import styled from "styled-components";
import ImageURL from "../assets/profile.jpeg";
import { PhoneIcon, EmailIcon } from "./Icons";
const Profile = () => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <Img src={ImageURL} />
      </ImageContainer>
      <InfoContainer>
        <SectionOne>
          <div>
            <Name>Andrés Felipe Celis</Name>
            <Attitude>Front-end developer</Attitude>
          </div>
          <div>
            <EmailContainer>
              {EmailIcon}
              <Email>andres.celis@coreounivalle.edu.co</Email>
            </EmailContainer>
            <div style={{ display: "flex" }}>
              {PhoneIcon}
              <Phone>(+57) 324 5884 037</Phone>
            </div>
          </div>
        </SectionOne>
        <SectionTwo>
          Systems engineering student, outstanding and dedicated with great
          interest in learning, responsible and resilient.
        </SectionTwo>
        <SectionThree>
          Great initiative to solve problems, willing to face the challenges of
          development with new technologies learning as you go.
        </SectionThree>
      </InfoContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  grid-area: profile;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 18px;
  background-color: white;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 1000px) and (min-width: 500px) {
    /* padding: 50px 150px; */
  }
`;

const ImageContainer = styled.div`
  height: 265px;
  width: 265px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    width: 100%;
    height: 55%;
  }
  @media (max-width: 1000px) and (min-width: 500px) {
    width: 50%;
    height: 55%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 78%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 30px;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
`;

const SectionOne = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #4f4f4f;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
  /* align-items: center; */
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #4f4f4f;
`;
const Attitude = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #828282;
`;
const Email = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #4f4f4f;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;
const Phone = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #4f4f4f;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

const SectionTwo = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #828282;
  word-wrap: break-all;
`;

const SectionThree = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #828282;
`;

export default Profile;
