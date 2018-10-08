import React, { Component } from "react";

import { Button } from "./styles";
import X from "../icons/x";

class CloseButton extends Component {
  render() {
    const { title, toggle, url } = this.props;
    return (
      <Button onClick={toggle ? e => toggle(e, url) : () => {}}>
        <span>{title}</span>
        <X />
      </Button>
    );
  }
}

export default CloseButton;
