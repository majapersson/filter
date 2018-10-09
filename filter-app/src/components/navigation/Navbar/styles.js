import styled from "styled-components";
import { COLORS } from "../../../Helpers";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 4.5rem;
  position: fixed;
  transition: transform 500ms cubic-bezier(0.5, 0, 0, 1);
  width: 100%;
  z-index: 3;

  ${props =>
    props.dark &&
    `background-image: linear-gradient(to bottom, ${
      COLORS.dark
    }, transparent)`};

  @media (orientation: landscape) {
    // transform: translateY(-100%);
    position: absolute;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 400px) {
    padding-left: 2.5rem;
    width: 37.5vw;
  }
`;

export const StyledLogo = styled.a`
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  height: 100%;
  margin-left: 0.5rem;

  svg {
    fill: ${COLORS.light};
    width: 2rem;
  }
`;

export const Tab = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 1rem;
  margin-left: 1rem;
  z-index: 3;

  svg {
    width: 1rem;

    path,
    g {
      ${props =>
        props.transparent ? `fill: ${COLORS.fg}` : `fill: ${COLORS.bg}`};
    }
  }
`;
