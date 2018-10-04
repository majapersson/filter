import React, { Component } from "react";
import styled from "styled-components";
import { COLORS } from "../Helpers";

import { ContentProvider } from "../context/ContentContext";
import Expand from "./HOC/Expand";
import Slide from "./Slide";

const Wrapper = styled.section`
  display: flex;
  background-color: ${COLORS.dark};
`;

export default class SlideWrapper extends Component {
  render() {
    const { articles } = this.props;
    return (
      <Wrapper>
        {articles.map(article => (
          <Expand key={article.id}>
            {({ expanded, toggleExpand }) => (
              <ContentProvider article={article}>
                <Slide toggleExpand={toggleExpand} expanded={expanded} />
              </ContentProvider>
            )}
          </Expand>
        ))}
      </Wrapper>
    );
  }
}
