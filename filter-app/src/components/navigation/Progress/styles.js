import styled from "styled-components";

export const Length = styled.div`
  height: 67.5%;
  width: 0.125rem;
  background-color: rgba(0, 0, 0, 0.1);

  div {
    background-color: ${props =>
      props.theme ? props.theme.colors.dark : "#000"};
    height: ${props => props.progress}%;
  }
`;

export const Page = styled.span`
  font-family: ${props =>
    props.theme ? `${props.theme.fonts.sansSerif}` : "sans-serif"};
  font-size: 1.25rem;
  font-weight: 300;
  span {
    font-size: 50%;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 37.5vh;
  position: fixed;
  bottom: 0;
  right: 62.5vw;
  align-items: center;
  padding: 0.75rem 0;
  width: 3rem;
  z-index: 2;

  background-color: ${props =>
    props.theme ? props.theme.colors.light : "#fff"};
  transition: all 300ms;

  ${props => props.progress < 3 && "bottom: -37.5vh"};

  @media (max-width: 400px) {
    right: auto;
    left: 0;
  }
`;
