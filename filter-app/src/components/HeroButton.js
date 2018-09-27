import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import X from "./icons/x";
import Arrow from "./icons/arrow";

const Button = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  position: relative;

  a {
    display: inline-block;
    border-bottom: 0.25rem solid #fff;
    color: ${props => (props.theme ? `${props.theme.colors.light}` : "#fff")};
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.13rem;
    margin-right: 1rem;
  }
`;

class HeroButton extends Component {
  render() {
    const { title, url, close } = this.props;
    return (
      <Button>
        <Link to={url}>{title}</Link>
        {close ? <X /> : <Arrow />}
      </Button>
    );
  }
}

export default HeroButton;
