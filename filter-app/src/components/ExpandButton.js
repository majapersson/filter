import React, { Component } from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../Helpers";

const Button = styled.button`
  height: 3rem;
  padding: 0;
  position: absolute;
  bottom: 37.5vh;
  width: 3rem;

  background-color: transparent;
  border: none;
  color: #000;
  font: 1rem ${FONTS.sansSerif};
  transition: bottom 300ms;

  ${props => !props.clicked && `background-color: ${COLORS.accent};`};
`;

export default class ExpandButton extends Component {
  render() {
    return (
      <Button
        onClick={() => {
          this.props.toggleHighlight();
          this.props.toggleButton();
        }}
        clicked={this.props.clicked}
      >
        {this.props.expanded ? "-" : "+"}
      </Button>
    );
  }
}
