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

const Lead = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  line-height: 2.5rem;
  margin-bottom: 3rem;
`;

class TextSection extends Component {
  render() {
    return (
      <RightText className="TextSection">
        <Content>
          {this.props.lead ? <Lead>{this.props.lead}</Lead> : ""}

          {ReactHtmlParser(this.props.content)}
        </Content>
      </RightText>
    );
  }
}

export default TextSection;
