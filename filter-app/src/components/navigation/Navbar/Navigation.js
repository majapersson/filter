import React, { Component } from "react";
import styled from "styled-components";

import { Logo, SmallLogo } from "../../Logo";
import Account from "../../icons/account";
import X from "../../icons/x";

import { Nav, Left, StyledLogo, User, Tab } from "./styles.js";

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <Nav>
        <Left>
          <StyledLogo href="/">
            {window.innerWidth < 400 ? <SmallLogo /> : <Logo />}
          </StyledLogo>
          <User>
            <span>{user}</span>
            <Tab>
              <Account />
            </Tab>
          </User>
        </Left>
        <Tab>
          <X style={{ width: "1rem" }} />
        </Tab>
      </Nav>
    );
  }
}

export default Navigation;
