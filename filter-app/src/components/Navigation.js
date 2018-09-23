import React, { Component } from "react";
import styled from "styled-components";

import Progress from "./Progress";
import NavButton from "./NavButton";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 37.5vh;
  position: fixed;
  bottom: 0;
  right: 62.5vw;
  z-index: 2;
  width: 3rem;
`;

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Progress />
        <NavButton icon={"M"} />
        <NavButton icon={"C"} />
      </Nav>
    );
  }
}

export default Navigation;
