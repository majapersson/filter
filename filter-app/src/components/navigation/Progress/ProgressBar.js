import React, { Component } from "react";
import styled from "styled-components";

import { COLORS, FONTS } from "../../../Helpers";
import { ProgressContext } from "../../HOC/ScrollProvider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% - 6rem);
  flex-grow: 0;
  flex-shrink: 0;
  padding: 1rem 0 1.5rem 0;
`;

const Length = styled.div`
  height: calc(100% - 1.5rem);
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
  padding-top: 1rem;

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
          <Wrapper>
            <Length>
              <div style={{ height: `${progress}%` }} />
            </Length>
            <Page>
              {page}
              <span>/{sections}</span>
            </Page>
          </Wrapper>
        )}
      </ProgressContext.Consumer>
    );
  }
}

export default ProgressBar;
