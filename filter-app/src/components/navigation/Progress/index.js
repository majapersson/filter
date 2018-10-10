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
        {({ progress }) => (
          <Wrapper
            className="Progress"
            style={{ bottom: progress < 3 && -37.5 + "vh" }}
          >
            <ProgressBar sections={sections} />
            <Comments
              style={{
                flexBasis: "3rem",
                flexShrink: 0,
                width: "3rem",
                padding: "0.5rem"
              }}
              toggle={toggleComments}
            />
            <SettingsIcon
              style={{ flexBasis: "3rem", flexShrink: 0 }}
              toggle={toggleSettings}
            />
          </Wrapper>
        )}
      </ProgressContext.Consumer>
    );
  }
}
