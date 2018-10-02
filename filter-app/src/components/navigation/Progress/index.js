import React, { Component } from "react";
import { Length, Page, ProgressBar } from "./styles";

import SettingsIcon from "../../icons/settings";

export default class Progress extends Component {
  render() {
    const { progress, toggleSettings, sections } = this.props;
    const page =
      Math.floor((this.props.progress / 100) * this.props.sections) + 1;
    return (
      <React.Fragment>
        <ProgressBar className="Progress" progress={progress}>
          <Length progress={progress}>
            <div />
          </Length>
          <Page>
            {page}
            <span>/{sections}</span>
          </Page>

          <SettingsIcon toggle={toggleSettings} />
        </ProgressBar>
      </React.Fragment>
    );
  }
}
