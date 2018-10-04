import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { Content, Text } from "./styles";

import ThemeContext from "../../context/ThemeContext";

class TextSection extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {({ colors, font }) => (
            <Text
              className="TextSection"
              style={{ backgroundColor: colors.bg, color: colors.fg }}
            >
              <Content font={font}>
                {ReactHtmlParser(this.props.content)}
              </Content>
            </Text>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}

export default TextSection;
