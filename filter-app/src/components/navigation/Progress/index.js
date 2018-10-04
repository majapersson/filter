import React, { Component } from "react";
import { Length, Page, ProgressBar } from "./styles";

import SettingsIcon from "../../icons/settings";

export default class Progress extends Component {
  render() {
    const { progress, toggleSettings, page, sections } = this.props;
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

        <SettingsIcon toggle={toggleSettings} />
      </ProgressBar>
    );
  }
}
