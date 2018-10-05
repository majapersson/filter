import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "./styles";
import Arrow from "../icons/arrow";

class ArrowButton extends Component {
  render() {
    const { right, title, toggle, url } = this.props;
    return (
      <Button>
        <Link
          to={url}
          onClick={toggle ? e => toggle(e, url) : () => {}}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none"
          }}
        >
          <span>{title}</span>
          <Arrow style={{ transform: right && "rotate(-90deg)" }} />
        </Link>
      </Button>
    );
  }
}

export default ArrowButton;
