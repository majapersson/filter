import React, { Component } from "react";

import { StyledHighlight } from "./styles";
export default class Highlight extends Component {
  render() {
    return (
      <StyledHighlight
        {...this.props}
        expanded={this.props.expanded}
        onClick={this.props.toggle}
      />
    );
  }
}
