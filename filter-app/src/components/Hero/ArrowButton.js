import React, { Component } from "react";
import { Button } from "./styles";
import Arrow from "../icons/arrow";

class ArrowButton extends Component {
  render() {
    const { right, title, toggle, url } = this.props;
    return (
      <Button onClick={toggle ? e => toggle(e, url) : () => {}}>
        <span>{title}</span>
        <Arrow style={{ transform: right && "rotate(-90deg)" }} />
      </Button>
    );
  }
}

export default ArrowButton;
