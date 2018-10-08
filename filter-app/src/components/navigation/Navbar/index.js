import React, { Component } from "react";

import Expand from "../../HOC/Expand";
import { SmallLogo } from "../../Logo";
import Account from "../../icons/account";
import Menu from "../../icons/menu";
import X from "../../icons/x";
import MainMenu from "./MainMenu";

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
          <Expand>
            {({ expanded, toggleExpand }) => (
              <React.Fragment>
                <Tab
                  transparent={this.props.transparent}
                  onClick={toggleExpand}
                >
                  {expanded ? <X style={{ fill: "#FFF" }} /> : <Menu />}
                </Tab>
                <MainMenu expanded={expanded} />
              </React.Fragment>
            )}
          </Expand>
        </Right>
      </Nav>
    );
  }
}

export default Navigation;
