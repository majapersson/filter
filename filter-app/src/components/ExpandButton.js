import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 3rem;
  padding: 0;
  position: absolute;
  bottom: 37.5vh;
  width: 3rem;

  background-color: transparent;
  border: none;
  color: #000;
  font: 1rem ${props => props.theme && props.theme.fonts.sansSerif};
  transition: bottom 300ms;

  ${props =>
    !props.clicked && `background-color: ${props.theme.colors.accent};`};
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
