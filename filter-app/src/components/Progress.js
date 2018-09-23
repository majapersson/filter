import React, { Component } from "react";
import styled from "styled-components";

const Page = styled.span``;

const Length = styled.div`
  height: 100%;
  width: 0.125rem;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 67%;
  padding: 0.75rem 0;

  background-color: #fff;
`;

export default class Progress extends Component {
  render() {
    return (
      <ProgressBar className="Progress">
        <Page>1 / 4</Page>
        <Length>
          <div
            style={{ backgroundColor: "#000", height: this.props.progress }}
          />
        </Length>
      </ProgressBar>
    );
  }
}
