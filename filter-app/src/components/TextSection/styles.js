import styled from "styled-components";
import { COLORS, FONTS } from "../../Helpers";

export const Text = styled.article`
  display: flex;
  justify-content: center;
  padding: 12.5vh 0;
  width: 87.2%;

  overflow: hidden;

  ${props => props.expanded && "width: 0px"};
`;

export const Content = styled.div`
  padding: 0 0.5rem 0 1.5rem;
  width: 100%;

  font-family: ${FONTS.serif};
  font-size: ${props => props.font && `${props.font.size}rem`};
  line-height: ${props => props.font && props.font.spacing};

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${FONTS.sansSerif};
  }

  h2 {
    font-size: ${props => props.font && `${props.font.size * 1.5}rem`};
    line-height: ${props => props.font && `${props.font.spacing * 0.8}`};
  }

  h3 {
    font-size: ${props => props.font && `${props.font.size * 1.25}rem`};
    line-height: ${props => props.font && `${props.font.spacing * 0.7}`};
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

  a {
    background-color: ${COLORS.accent};
    color: inherit;
    text-decoration: none;
  }
`;
