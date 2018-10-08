import React, { Component } from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../Helpers";
import Plus from "./icons/Plus";

const Button = styled.button`
  height: 3rem;
  padding: 1rem;
  position: fixed;
  bottom: 37.5vh;
  left: 0;
  width: 3rem;

  background-color: ${COLORS.accent};
  border: none;
  color: #000;
  font: 1rem ${FONTS.sansSerif};
  transform: translateX(-100%);
  transition: transform 500ms cubic-bezier(0.5, 0, 0, 1);

  ${props => props.inView && "transform: translate(0)"};
`;

export default class ExpandButton extends Component {
  render() {
    return (
      <Button onClick={this.props.toggleHighlight} inView={this.props.inView}>
        <Plus />
      </Button>
    );
  }
}
