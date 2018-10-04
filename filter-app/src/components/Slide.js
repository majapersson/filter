import React, { Component } from "react";
import styled from "styled-components";

import ContentContext from "../context/ContentContext";
import Expand from "./HOC/Expand";
import Hero from "./Hero";

const Image = styled.img`
  height: 12rem;
  position: relative;
  left: 0;
  width: 67vw;

  cursor: pointer;
  filter: brightness(50%);
  transition: filter 300ms, transform 500ms cubic-bezier(1, 0, 0, 1);
  z-index: 0;

  &:hover {
    filter: brightness(100%);
  }

  ${props =>
    props.expanded &&
    `
      filter: brightness(100%);
      transform: scale(2) translateX(-10%);
      z-index: 1;
    `};

  ${props =>
    props.fullWidth &&
    `
    transform: scale(4) translateX(-20%);
  `};

  @media (min-width: 400px) {
    height: 12rem;
    width: 18.75vw;
  }
`;

class Slide extends Component {
  render() {
    const { toggleExpand, expanded } = this.props;
    return (
      <Expand>
        {({ expanded: fullWidth, toggleExpand: toggleFull }) => (
          <ContentContext.Consumer>
            {({ image }) => (
              <React.Fragment>
                <Image
                  src={image.sizes.medium}
                  expanded={expanded}
                  onClick={toggleExpand}
                  fullWidth={fullWidth}
                />
                {expanded && (
                  <Hero
                    heroOpen
                    closeHero={toggleExpand}
                    toggleFull={toggleFull}
                    fullWidth={fullWidth}
                  />
                )}
              </React.Fragment>
            )}
          </ContentContext.Consumer>
        )}
      </Expand>
    );
  }
}

export default Slide;
