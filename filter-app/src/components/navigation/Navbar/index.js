import React, { Component } from "react";

import ThemeContext from "../../../context/ThemeContext";
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
          <ThemeContext.Consumer>
            {({ colors }) => (
              <React.Fragment>
                <Tab colors={colors} overlay={this.props.overlay}>
                  <Account />
                </Tab>
                <Expand>
                  {({ expanded, toggleExpand }) => (
                    <React.Fragment>
                      <Tab
                        colors={colors}
                        overlay={this.props.overlay}
                        onClick={toggleExpand}
                      >
                        {expanded ? <X style={{ fill: "#FFF" }} /> : <Menu />}
                      </Tab>
                      <MainMenu expanded={expanded} />
                    </React.Fragment>
                  )}
                </Expand>
              </React.Fragment>
            )}
          </ThemeContext.Consumer>
        </Right>
      </Nav>
    );
  }
}

export default Navigation;
