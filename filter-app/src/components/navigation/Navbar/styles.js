import styled from "styled-components";
import { COLORS } from "../../../Helpers";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 4.5rem;
  position: fixed;
  width: 100%;
  z-index: 3;

  @media (min-width: 400px) {
    height: 6rem;
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

  background-color: ${props =>
    props.transparent ? "transparent" : `${COLORS.fg}`};

  svg {
    width: 1rem;

    path,
    g {
      ${props =>
        props.transparent ? `fill: ${COLORS.fg}` : `fill: ${COLORS.bg}`};
    }
  }
`;
