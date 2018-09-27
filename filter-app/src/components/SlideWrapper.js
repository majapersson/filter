import React, { Component } from "react";
import styled from "styled-components";

import Expand from "./HOC/Expand";
import Slide from "./Slide";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: ${props =>
    props.theme ? props.theme.colors.dark : "#000"};
`;

export default class SlideWrapper extends Component {
  render() {
    const { articles } = this.props;
    return (
      <Wrapper>
        {articles.map(article => (
          <Expand key={article.id}>
            {({ expanded, toggleExpand }) => (
              <Slide
                article={article}
                toggleExpand={toggleExpand}
                expanded={expanded}
              />
            )}
          </Expand>
        ))}
      </Wrapper>
    );
  }
}
