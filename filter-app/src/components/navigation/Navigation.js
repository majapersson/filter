import React, { Component } from "react";
import styled from "styled-components";

import Progress from "./Progress";
import Logo from "../Logo";

const Nav = styled.nav`
  padding: 1.5rem 3rem;
  position: fixed;
  z-index: 2;
`;

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Logo
          style={{
            fill: "#fff",
            width: "10rem"
          }}
        />
      </Nav>
    );
  }
}

export default Navigation;
