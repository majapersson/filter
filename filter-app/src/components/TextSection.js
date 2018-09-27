import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";

const RightText = styled.section`
  display: flex;
  justify-content: center;
  padding: 12.5vh 0;
  width: 100%;

  background-color: ${props => (props.theme ? props.theme.colors.bg : "#fff")};
  color: ${props => (props.theme ? props.theme.colors.fg : "#000")};
`;

const Content = styled.div`
  margin-left: 3rem;
  margin-right: 12.5vw;
  max-width: 37.5rem;

  font-family: ${props => (props.theme ? props.theme.fonts.serif : "serif")};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props =>
      props.theme ? props.theme.fonts.sansSerif : "sans-serif"};
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  blockquote {
    display: flex;
    align-items: center;
    font-style: italic;

    &:before,
    &:after {
      font-style: normal;
      font-size: 4rem;
      opacity: 0.33;
    }

    &:before {
      content: "» ";
      margin-right: 1rem;
    }

    &:after {
      content: " «";
    }
  }
`;

class TextSection extends Component {
  render() {
    return (
      <RightText className="TextSection">
        <Content>{ReactHtmlParser(this.props.content)}</Content>
      </RightText>
    );
  }
}

export default TextSection;
