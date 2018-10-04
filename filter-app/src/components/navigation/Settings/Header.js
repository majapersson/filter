import React, { Component } from "react";
import styled from "styled-components";

import Magazine from "../../Hero/Magazine";

export const Wrapper = styled.div`
  display: flex;
  height: 6rem;
  padding-right: 5rem;

  > div {
    padding: 1rem;
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
  opacity: 0.67;
`;

class Header extends Component {
  render() {
    const { article } = this.props;
    return (
      <Wrapper>
        <Image src={article.image.sizes.thumbnail} />
        <div>
          <Title>{article.title}</Title>
          <Magazine magazine={article.magazine} color={"dark"} />
        </div>
      </Wrapper>
    );
  }
}

export default Header;
