import React, { Component } from "react";
import styled from "styled-components";
import { COLORS } from "../Helpers";

import ContentContext from "../context/ContentContext";
import Expand from "./HOC/Expand";
import Hero from "./Hero";

const Image = styled.img`
  height: 12rem;
  cursor: pointer;
  filter: brightness(70%);
  object-fit: cover;
  transition: filter 300ms, transform 500ms cubic-bezier(1, 0, 0, 1);
  z-index: 0;

  &:hover {
    filter: brightness(100%);
  }

  ${props =>
    props.expanded &&
    `
      // filter: brightness(100%);
      // transform: scale(2) translateX(-10%);
      // z-index: 1;
    `};

  ${props =>
    props.fullWidth &&
    `
    // transform: scale(4) translateX(-20%);
  `};

  @media (min-width: 400px) {
    height: 12rem;
    width: 18.75vw;
  }
`;

const Title = styled.p`
  color: ${COLORS.light};
  margin: 0;
  opacity: 0.33;
  margin: 0 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  position: relative;
  left: 0;
  width: 67vw;
`;

class Slide extends Component {
  render() {
    const { toggleExpand, expanded } = this.props;
    return (
      <Expand>
        {({ expanded: fullWidth, toggleExpand: toggleFull }) => (
          <ContentContext.Consumer>
            {({ image, title }) => (
              <Wrapper>
                <Image
                  src={image.sizes.medium}
                  expanded={expanded}
                  onClick={toggleExpand}
                  fullWidth={fullWidth}
                />
                <Title>{title}</Title>
                {expanded && (
                  <Hero
                    heroOpen
                    closeHero={toggleExpand}
                    toggleFull={toggleFull}
                    fullWidth={fullWidth}
                  />
                )}
              </Wrapper>
            )}
          </ContentContext.Consumer>
        )}
      </Expand>
    );
  }
}

export default Slide;
