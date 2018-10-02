import styled from "styled-components";

export const Text = styled.article`
  display: flex;
  justify-content: center;
  padding: 12.5vh 0;
  position: relative;
  width: 100vw;

  background-color: ${props => props.theme && props.theme.colors.bg};
  color: ${props => props.theme && props.theme.colors.fg};
  overflow: hidden;

  ${props => props.expanded && "width: 0px"};
`;

export const Header = styled.div`
  height: 4.5rem;
  position: absolute;
  top: 0;
  width: 100%;

  background-color: ${props => props.theme && props.theme.colors.bg};
  background-image: linear-gradient(
    ${props => props.theme && props.theme.colors.bg},
    transparent 90%
  );
`;

export const Content = styled.div`
  max-width: 87.2%;
  padding: 0 0.5rem 0 1.5rem;

  font-family: ${props => (props.theme ? props.theme.fonts.serif : "serif")};
  font-size: ${props =>
    props.theme ? `${props.theme.fonts.size}rem` : "1rem"};
  line-height: ${props => props.theme && props.theme.fonts.height};

  @media (min-width: 400px) {
    margin-left: 3rem;
    margin-right: 12.5vw;
    max-width: 37.5rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props =>
      props.theme ? props.theme.fonts.sansSerif : "sans-serif"};
  }

  h2 {
    font-size: ${props =>
      props.theme ? `${props.theme.fonts.size * 1.5}rem` : "1.5rem"};
    line-height: 1.4;
  }

  h3 {
    font-size: ${props =>
      props.theme ? `${props.theme.fonts.size * 1.25}rem` : "1.25rem"};
    line-height: 1.2;
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
    }

    &:before {
      content: "» ";
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
