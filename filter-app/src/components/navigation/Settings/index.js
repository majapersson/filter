import React, { Component } from "react";
import styled from "styled-components";

import Chapters from "./Chapters";
import Header from "./Header";
import Footer from "./Footer";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  top: 0;
  transform: translate(-100%, 100%);
  transition: transform 500ms cubic-bezier(0.5, 0, 0, 1);
  width: 100%;
  z-index: 3;

  background-color: ${props => props.theme && props.theme.colors.light};
  ${props => props.expanded && "transform: translate(0, 0)"};
`;

class Settings extends Component {
  render() {
    const { article, expanded, close, page } = this.props;
    return (
      <Container expanded={expanded}>
        <Header article={article} />
        <Chapters article={article} page={page} />
        <Footer close={close} />
      </Container>
    );
  }
}

export default Settings;
