import React, { Component } from "react";
import styled from "styled-components";

const Page = styled.span`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  span {
    font-size: 50%;
  }
`;

const Length = styled.div`
  height: 100%;
  width: 0.125rem;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 37.5vh;
  position: fixed;
  bottom: 0;
  right: 62.5vw;
  align-items: center;
  flex-basis: 67%;
  padding: 0.75rem 0;
  width: 3rem;
  z-index: 2;

  background-color: #fff;
`;

export default class Progress extends Component {
  render() {
    const { progress, sections } = this.props;
    const page =
      Math.floor((this.props.progress / 100) * this.props.sections) + 1;
    return (
      <ProgressBar className="Progress">
        <Length>
          <div
            style={{
              backgroundColor: "#000",
              height: `${this.props.progress}%`
            }}
          />
        </Length>
        <Page>
          {page}
          <span>/{sections}</span>
        </Page>
      </ProgressBar>
    );
  }
}
