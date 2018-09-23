import React, { Component } from "react";
import styled from "styled-components";

export const LeftHighlight = styled.section`
  flex-basis: 37.5%;
  flex-shrink: 0;
  height: 100vh;
  padding: 0 3rem;
  position: sticky;
  top: 0;
  left: 0;

  background-color: black;
  color: white;

  ${props =>
    props.image
      ? `
    background-image: url('${props.image}');
    background-size: cover;
    background-attachment: fixed;
    `
      : ""};

  ${props =>
    props.align
      ? `
      text-align: ${props.align};
    `
      : ""};
`;

export default class Highlight extends Component {
  render() {
    return <LeftHighlight {...this.props} />;
  }
}
