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
      <Nav>
        <StyledLogo href="/">
          <SmallLogo />
        </StyledLogo>
        <Right>
          <Tab dark={this.props.dark}>
            <Account />
          </Tab>
          <Expand>
            {({ expanded, toggleExpand }) => (
              <React.Fragment>
                <Tab dark={this.props.dark} onClick={toggleExpand}>
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
