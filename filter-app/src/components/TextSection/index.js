import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { Text, Content } from "./styles";

class TextSection extends Component {
  render() {
    return (
      <Text className="TextSection">
        <Content>{ReactHtmlParser(this.props.content)}</Content>
      </Text>
    );
  }
}

export default TextSection;
