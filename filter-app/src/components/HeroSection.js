import React, { Component } from "react";
import styled from "styled-components";

import TextSection from "./TextSection";
import Highlight from "./Highlight";

const Hero = styled.article`
  display: flex;
`;

const Title = styled.h1`
  font-family: "Changa One", "Impact", sans-serif;
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 4.5rem;
  text-transform: uppercase;
`;

const Author = styled.p`
  opacity: 0.67;
  font-style: italic;

  > span {
    opacity: 1;
  }
`;

const Magazine = styled.p`
  opacity: 0.67;
  text-transform: uppercase;
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
        >
          <Title>{article.title}</Title>
          <Author>
            Text: <span>{article.author.name}</span>
          </Author>
          <Magazine>
            Publicerad i Filter #{article.magazine.title} ({
              article.magazine.published
            })
          </Magazine>
        </Highlight>
        <TextSection content={section.content} lead={article.lead} />
      </Hero>
    );
  }
}
