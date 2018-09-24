import React, { Component } from "react";
import styled from "styled-components";

const StyledHighlight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 37.5%;
  flex-shrink: 0;
  height: 100vh;
  min-width: 37.5vw;
  padding: 0 6rem 0 3rem;
  position: sticky;
  top: 0;
  left: 0;

  background-color: black;
  color: white;
  transition: flex-basis 300ms;

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
    return <StyledHighlight {...this.props} />;
  }
}
