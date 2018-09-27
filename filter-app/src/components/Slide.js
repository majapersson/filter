import React, { Component } from "react";
import styled from "styled-components";

import HeroSection from "./HeroSection";

const Image = styled.img`
  height: 12rem;
  position: relative;
  width: 18.75vw;

  cursor: pointer;
  filter: brightness(50%);
  transition: filter 300ms, transform 500ms cubic-bezier(1, 0, 0, 1);

  &:hover {
    filter: brightness(100%);
  }
`;

class Slide extends Component {
  render() {
    const { article, toggleExpand, expanded } = this.props;
    console.log(this);
    return (
      <React.Fragment>
        <Image
          src={article.image.sizes.medium}
          style={
            expanded
              ? {
                  filter: "brightness(100%)",
                  transform: "scale(2)",
                  zIndex: 1
                }
              : {}
          }
          onClick={toggleExpand}
        />
        {expanded ? (
          <HeroSection article={article} heroOpen closeHero={toggleExpand} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Slide;
