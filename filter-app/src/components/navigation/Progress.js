import React, { Component } from "react";
import styled from "styled-components";
import Play from "../icons/play";

const Page = styled.span`
  font-family: ${props =>
    props.theme ? `${props.theme.fonts.sansSerif}` : "sans-serif"};
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
  right: 62.5vw;
  align-items: center;
  flex-basis: 67%;
  padding: 0.75rem 0;
  width: 3rem;
  z-index: 2;

  background-color: ${props =>
    props.theme ? props.theme.colors.light : "#fff"};
  transition: all 300ms;
`;

export default class Progress extends Component {
  render() {
    const { progress, sections } = this.props;
    const page =
      Math.floor((this.props.progress / 100) * this.props.sections) + 1;
    return (
      <ProgressBar
        className="Progress"
        style={{ bottom: progress > 1 ? "0" : "-31vh" }}
      >
        <Play style={{ paddingBottom: "2rem" }} />
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
