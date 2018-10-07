import React, { Component } from "react";
import styled from "styled-components";
import { COLORS } from "../Helpers";

import { ContentProvider } from "../context/ContentContext";
import Expand from "./HOC/Expand";
import Slide from "./Slide";

const Overlay = styled.div`
  background-image: linear-gradient(to right, transparent, ${COLORS.dark});
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  pointer-events: none;
  width: 20vw;
  z-index: 0;
`;

const Slider = styled.article`
  display: flex;
  background-color: ${COLORS.dark};
`;

const SliderWrapper = styled.div`
  touch-action: pan-right;
  overflow: auto;
`;

const Title = styled.h3`
  color: ${COLORS.light};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.13rem;
  margin: 0.5rem;
  opacity: 0.67;
  text-transform: uppercase;
`;

const Wrapper = styled.section`
  position: relative;
`;

export default class SlideWrapper extends Component {
  render() {
    const { articles } = this.props;
    return (
      <Wrapper>
        <Title>Mest lästa artiklar</Title>
        <SliderWrapper>
          <Slider>
            {articles.map(article => (
              <Expand key={article.id}>
                {({ expanded, toggleExpand }) => (
                  <ContentProvider article={article}>
                    <Slide toggleExpand={toggleExpand} expanded={expanded} />
                  </ContentProvider>
                )}
              </Expand>
            ))}
          </Slider>
        </SliderWrapper>
        <Overlay />
      </Wrapper>
    );
  }
}
