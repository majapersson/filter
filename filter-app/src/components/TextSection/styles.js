import styled from "styled-components";

export const Text = styled.article`
  display: flex;
  justify-content: center;
  padding: 12.5vh 0;
  width: 100%;

  background-color: ${props => (props.theme ? props.theme.colors.bg : "#fff")};
  color: ${props => (props.theme ? props.theme.colors.fg : "#000")};

  @media (min-width: 400px) {
  }
`;

export const Content = styled.div`
  padding: 0 0.5rem 0 1.5rem;

  font-family: ${props => (props.theme ? props.theme.fonts.serif : "serif")};

  @media (min-width: 400px) {
    margin-left: 3rem;
    margin-right: 12.5vw;
    max-width: 37.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props =>
      props.theme ? props.theme.fonts.sansSerif : "sans-serif"};
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;

    @media (min-width: 400px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.5rem;

    @media (min-width: 400px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  blockquote {
    font-style: italic;

    p {
      display: inline;
    }

    &:before,
    &:after {
      font-style: normal;
      opacity: 0.33;
      @media (min-width: 400px) {
        font-size: 4rem;
      }
    }

    &:before {
      content: "» ";
      margin-right: 1rem;
    }

    &:after {
      content: " «";
    }

    @media (min-width: 400) {
      display: flex;
      align-items: center;
    }
  }
`;
