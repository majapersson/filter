import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "./styles";
import Arrow from "../icons/arrow";

class ArrowButton extends Component {
  render() {
    const { title, toggle, url } = this.props;
    return (
      <Button>
        <Link to={url} onClick={toggle ? e => toggle(e, url) : () => {}}>
          <span>{title}</span>
          <Arrow />
        </Link>
      </Button>
    );
  }
}

export default ArrowButton;
