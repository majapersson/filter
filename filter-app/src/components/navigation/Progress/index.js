import React, { Component } from "react";
import styled from "styled-components";
import { COLORS } from "../../../Helpers";

import { ProgressContext } from "../../HOC/ScrollProvider";
import ProgressBar from "./ProgressBar";
import Comments from "../../icons/comments";
import SettingsIcon from "../../icons/settings";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 37.5vh;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  width: 3rem;
  z-index: 2;

  background-color: ${COLORS.light};
  transition: all 500ms cubic-bezier(0.5, 0, 0, 1);

  @media (orientation: landscape) {
    transform: translateX(-100%);
  }
`;

export default class Progress extends Component {
  render() {
    const { toggleSettings, toggleComments, sections } = this.props;
    return (
      <ProgressContext.Consumer>
        {({ progress, scrollTop }) => (
          <Wrapper
            className="Progress"
            style={{
              bottom: scrollTop < window.innerHeight / 2 && -37.5 + "vh"
            }}
          >
            <SettingsIcon
              style={{ flexBasis: "3rem", flexShrink: 0 }}
              toggle={toggleSettings}
            />
            <Comments
              style={{
                flexBasis: "3rem",
                flexShrink: 0,
                width: "3rem",
                padding: "0.5rem"
              }}
              toggle={toggleComments}
            />
            <ProgressBar sections={sections} />
          </Wrapper>
        )}
      </ProgressContext.Consumer>
    );
  }
}
