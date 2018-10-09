import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { StickyContainer, Sticky } from "react-sticky";

import { Content, Header, Text } from "./styles";

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
              <StickyContainer>
                <Sticky distanceFromTop={0}>
                  {({ style }) => <Header style={style} color={colors.bg} />}
                </Sticky>
                <Content font={font}>
                  {ReactHtmlParser(this.props.content)}
                </Content>
              </StickyContainer>
            </Text>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}

export default TextSection;
