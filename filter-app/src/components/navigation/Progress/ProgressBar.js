import React, { Component } from "react";
import styled from "styled-components";

import { COLORS, FONTS } from "../../../Helpers";
import { ProgressContext } from "../../HOC/ScrollProvider";

const Length = styled.div`
  flex-basis: calc(100% - 6rem);
  flex-grow: 0;
  flex-shrink: 0;
  // height: 55%;
  width: 0.125rem;
  background-color: rgba(0, 0, 0, 0.1);

  div {
    background-color: ${COLORS.dark};
  }
`;

const Page = styled.span`
  font-family: ${FONTS.sansSerif};
  font-size: 1.25rem;
  font-weight: 300;
  span {
    font-size: 50%;
  }
`;

class ProgressBar extends Component {
  render() {
    const { sections } = this.props;
    return (
      <ProgressContext.Consumer>
        {({ page, progress }) => (
          <React.Fragment>
            <Length>
              <div style={{ height: `${progress}%` }} />
            </Length>
            <Page>
              {page}
              <span>/{sections}</span>
            </Page>
          </React.Fragment>
        )}
      </ProgressContext.Consumer>
    );
  }
}

export default ProgressBar;
