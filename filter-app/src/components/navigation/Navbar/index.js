import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SmallLogo } from "../../Logo";
import Account from "../../icons/account";
import Menu from "../../icons/menu";

import { Nav, Right, StyledLogo, Tab } from "./styles.js";

class Navigation extends Component {
  render() {
    return (
      <Nav dark={this.props.dark}>
        <StyledLogo href="/">
          <SmallLogo />
        </StyledLogo>
        <Right>
          <Tab transparent={this.props.transparent}>
            <Account />
          </Tab>
          <Tab transparent={this.props.transparent}>
            <Link to="/">
              <Menu />
            </Link>
          </Tab>
        </Right>
      </Nav>
    );
  }
}

export default Navigation;
