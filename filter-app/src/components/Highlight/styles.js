import styled from "styled-components";

export const StyledHighlight = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 12.8%;
  flex-shrink: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  width: 3rem;

  background-color: black;
  color: white;
  transition: flex-basis 300ms;

  ${props =>
    props.image
      ? `
    background-image: url('${props.image}');
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    `
      : ""};

  ${props =>
    props.align
      ? `
      text-align: ${props.align};
    `
      : ""};

  ${props =>
    props.expanded &&
    `
    background-size: cover;
    flex-basis: 100%;
    `};

  @media (min-width: 400px) {
    flex-basis: 37.5%;
    min-width: 37.5vw;
    padding: 0 6rem 0 3rem;
  }

  @media (orientation: landscape) {
    flex-basis: 100%;
  }
`;
