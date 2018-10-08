import React, { Component } from "react";
import styled from "styled-components";
import { COLORS } from "../../../Helpers";

import Chapters from "./Chapters";
import Header from "./Header";
import Footer from "./Footer";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  transition: transform 500ms cubic-bezier(0.5, 0, 0, 1);
  width: 100%;
  z-index: 3;

  background-color: ${COLORS.light};
  ${props => props.expanded && "transform: translateX(0)"};
`;

class Settings extends Component {
  render() {
    const { expanded, close, page } = this.props;
    return (
      <Container expanded={expanded}>
        <Header />
        <Chapters page={page} />
        <Footer close={close} />
      </Container>
    );
  }
}

export default Settings;
