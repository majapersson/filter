import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";

const RightText = styled.section`
  display: flex;
  justify-content: center;
  padding: 12.5vh 0;
  width: 100%;
`;

const Content = styled.div`
  margin-right: 12.5vw;
  max-width: 37.5rem;
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
