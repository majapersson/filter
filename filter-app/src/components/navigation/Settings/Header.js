import React, { Component } from "react";
import styled from "styled-components";

import ContentContext from "../../../context/ContentContext";
import Magazine from "../../Hero/Magazine";

export const Wrapper = styled.div`
  display: flex;
  flex-basis: 6rem;
  flex-shrink: 0;
  height: 6rem;
  padding-right: 5rem;

  > div {
    padding: 0.5rem 1rem;
  }
`;

export const Author = styled.p`
  margin: 0;

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  span {
    font-style: italic;
    font-weight: 100;
    opacity: 0.33;
    text-transform: none;
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  opacity: 0.67;
`;

class Header extends Component {
  render() {
    return (
      <ContentContext.Consumer>
        {({ author, image, magazine, title }) => (
          <Wrapper>
            <Image src={image.sizes.thumbnail} />
            <div>
              <Title>{title}</Title>
              <Magazine
                color={"dark"}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  margin: 0
                }}
              />
              <Author>
                <span>Text: </span>
                {author.name}
              </Author>
            </div>
          </Wrapper>
        )}
      </ContentContext.Consumer>
    );
  }
}

export default Header;
