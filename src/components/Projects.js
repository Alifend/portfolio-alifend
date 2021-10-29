import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";
const Projects = () => {
  return (
    <ProjectsContainer>
      <Carousel responsive={responsive} infinite={true}>
        {ProjectsData.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </Carousel>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  grid-area: carrousel;
  width: 100%;
  height: auto;
`;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1340 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1340, min: 913 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 913, min: 0 },
    items: 1,
  },
};

export default Projects;
