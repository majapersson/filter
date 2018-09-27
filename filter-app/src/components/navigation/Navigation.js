import React, { Component } from "react";
import styled from "styled-components";

import Logo from "../Logo";

const Nav = styled.nav`
  padding: 0 3rem;
  position: fixed;
  z-index: 2;
`;

const StyledLogo = styled.svg`
  ${props =>
    props.theme
      ? `
    fill: ${props.theme.colors.light}
  `
      : "fill: #fff;"} width: 8.5rem;
`;

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <StyledLogo>
          <Logo />
        </StyledLogo>
      </Nav>
    );
  }
}

export default Navigation;
