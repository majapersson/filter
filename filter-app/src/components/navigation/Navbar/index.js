import React, { Component } from "react";
import styled from "styled-components";

import { Logo, SmallLogo } from "../../Logo";
import Account from "../../icons/account";
import Menu from "../../icons/menu";
import X from "../../icons/x";

import { Nav, Right, StyledLogo, User, Tab } from "./styles.js";

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <Nav>
        <StyledLogo href="/">
          {window.innerWidth < 400 ? <SmallLogo /> : <Logo />}
        </StyledLogo>
        <Right>
          <Tab transparent>
            <Account />
          </Tab>
          <Tab transparent>
            <Menu />
            {/*<X style={{ width: "1rem" }} />*/}
          </Tab>
        </Right>
      </Nav>
    );
  }
}

export default Navigation;
