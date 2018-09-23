import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;

  background-color: rgba(0, 0, 0, 1);
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  outline-color: #fff;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

class NavButton extends Component {
  render() {
    return <Button>{this.props.icon}</Button>;
  }
}

export default NavButton;
