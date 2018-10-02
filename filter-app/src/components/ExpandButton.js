import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 2rem;
  padding: 0;
  position: absolute;
  bottom: 37.5vh;
  margin: 0.5rem;
  width: 2rem;

  background-color: transparent;
  border: 0.125rem solid rgba(255, 255, 255, 0.67);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.67);
  font: 1rem ${props => props.theme && props.theme.fonts.sansSerif};
  outline-color: #fff;
  transition: bottom 300ms;
`;

export default class ExpandButton extends Component {
  render() {
    return (
      <Button onClick={this.props.toggle} expanded={this.props.expanded}>
        {this.props.expanded ? "-" : "+"}
      </Button>
    );
  }
}
