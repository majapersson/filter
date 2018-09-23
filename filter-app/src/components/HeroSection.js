import React, { Component } from "react";
import styled from "styled-components";

import TextSection from "./TextSection";
import Highlight from "./Highlight";
import ExpandButton from "./ExpandButton";

const Hero = styled.article`
  display: flex;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-family: "Changa One", "Impact", sans-serif;
  font-size: 5vw;
  font-weight: 400;
  line-height: 5vw;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Author = styled.p`
  text-transform: uppercase;
  margin: 0;

  span {
    font-style: italic;
    opacity: 0.67;
    text-transform: none;
  }
`;

const Magazine = styled.p`
  opacity: 0.67;
  text-transform: uppercase;
  margin: 0;
`;

export default class HeroSection extends Component {
  render() {
    const { article, section } = this.props;
    return (
      <Hero className="HeroSection">
        <Highlight
          image={section.image.url}
          align={"right"}
          className="Highlight"
          style={{ justifyContent: "flex-start" }}
        >
          <Overlay className="Overlay" />
          <Title>{article.title}</Title>
          <Author>
            <span>Text:</span> {article.author.name}
          </Author>
          <Magazine>
            Publicerad i Filter #{article.magazine.title} ({
              article.magazine.published
            })
          </Magazine>
          <ExpandButton />
        </Highlight>
        <TextSection content={section.content} lead={article.lead} />
      </Hero>
    );
  }
}
