import React, { Component } from "react";
import styled from "styled-components";

import Logo from "../Logo";
import Account from "../icons/account";
import X from "../icons/x";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 6rem;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
  width: 37.5vw;
`;

const StyledLogo = styled.svg`
  margin-top: auto;
  fill: ${props => (props.theme ? `${props.theme.colors.light}` : "#fff")};
  width: 8.5rem;
`;

const User = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  margin-left: 2rem;

  span {
    color: ${props => (props.theme ? `${props.theme.colors.light}` : "#fff")};
    font-size: 75%;
    font-weight: 100;
    letter-spacing: 0.05rem;
    opacity: 0.33;
    text-transform: uppercase;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 1rem;
  margin-left: 1rem;

  background-color: ${props =>
    props.theme ? `${props.theme.colors.dark}` : "#000"};

  svg {
    width: 1rem;
  }
`;

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <Nav>
        <Left>
          <StyledLogo>
            <Logo />
          </StyledLogo>
          <User>
            <span>{user}</span>
            <Menu>
              <Account />
            </Menu>
          </User>
        </Left>
        <Menu>
          <X style={{ width: "1rem" }} />
        </Menu>
      </Nav>
    );
  }
}

export default Navigation;
