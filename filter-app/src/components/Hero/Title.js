import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h1`
  font-size: 12vw;
  font-family: "Tiempos Headline", serif;
  line-height: 1.25;
  margin: 1rem 0;
  z-index: 0;

  @media (min-width: 400) {
    font-size: 6.75vw;
    line-height: 1.125;
  }
`;

const Title = ({ title }) => <TitleStyle>{title}</TitleStyle>;

export default Title;
