import React, { Component } from "react";
import styled from "styled-components";

import TextSection from "./TextSection";
import Highlight from "./Highlight";

const Hero = styled.article`
  display: flex;
`;

export default class HeroSection extends Component {
  render() {
    const { article, section, part } = this.props;
    return (
      <Hero className="HeroSection">
        <Highlight align={"center"} className="Highlight">
          <h1 style={{ color: "red" }}>HEEEj</h1>
        </Highlight>
        <TextSection content={section.content} />
      </Hero>
    );
  }
}
