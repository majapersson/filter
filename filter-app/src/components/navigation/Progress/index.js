import React, { Component } from "react";
import { Length, Page, ProgressBar } from "./styles";
import Settings from "../../icons/settings";

export default class Progress extends Component {
  render() {
    const { progress, sections } = this.props;
    const page =
      Math.floor((this.props.progress / 100) * this.props.sections) + 1;
    return (
      <ProgressBar className="Progress" progress={progress}>
        <Length progress={progress}>
          <div />
        </Length>
        <Page>
          {page}
          <span>/{sections}</span>
        </Page>
        <Settings />
      </ProgressBar>
    );
  }
}
