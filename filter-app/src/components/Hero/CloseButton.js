import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button } from "./styles";
import X from "../icons/x";

class CloseButton extends Component {
  render() {
    const { title, toggle, url } = this.props;
    return (
      <Button>
        <Link to={url} onClick={toggle ? e => toggle(e, url) : () => {}}>
          <span>{title}</span>
          <X />
        </Link>
      </Button>
    );
  }
}

export default CloseButton;
