import React, { Component } from "react";
import { Length, Page, ProgressBar } from "./styles";

import Comments from "../../icons/comments";
import SettingsIcon from "../../icons/settings";

export default class Progress extends Component {
  render() {
    const {
      page,
      progress,
      toggleSettings,
      toggleComments,
      sections
    } = this.props;
    return (
      <ProgressBar
        className="Progress"
        style={{ bottom: progress < 3 && -37.5 + "vh" }}
      >
        <Length>
          <div style={{ height: `${progress}%` }} />
        </Length>
        <Page>
          {page}
          <span>/{sections}</span>
        </Page>
        <Comments
          style={{ height: "3rem", padding: "0.5rem", width: "3rem" }}
          toggle={toggleComments}
        />
        <SettingsIcon toggle={toggleSettings} />
      </ProgressBar>
    );
  }
}
