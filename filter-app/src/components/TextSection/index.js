import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { Content, Header, Text } from "./styles";

class TextSection extends Component {
  render() {
    return (
      <Text className="TextSection">
        <Header />
        <Content>{ReactHtmlParser(this.props.content)}</Content>
      </Text>
    );
  }
}

export default TextSection;
