import styled from "styled-components";

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
    fill: ${props => (props.theme ? `${props.theme.colors.light}` : "#fff")};
    width: 2rem;

    @media (min-width: 400px) {
      width: 8.5rem;
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  margin-left: 2rem;

  span {
    color: ${props => (props.theme ? `${props.theme.colors.light}` : "#fff")};
    font-size: 75%;
    font-weight: 100;
    letter-spacing: 0.05rem;
    line-height: 1;
    opacity: 0.33;
    padding-bottom: 1rem;
    text-transform: uppercase;

    @media (max-width: 400px) {
      display: none;
    }
  }
`;

export const Tab = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 1rem;
  margin-left: 1rem;

  background-color: ${props =>
    props.transparent ? "transparent" : `${props.theme.colors.dark}`};

  svg {
    width: 1rem;

    path {
      ${props => (props.transparent ? `fill: ${props.theme.colors.dark}` : "")};
    }
  }
`;
