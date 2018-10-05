import styled from "styled-components";
import { COLORS, FONTS } from "../../Helpers";

export const Button = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  position: relative;

  span {
    display: inline-block;
    border-bottom: 0.25rem solid #fff;
    color: ${COLORS.light};
    font-size: 5vw;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.13rem;
    margin-right: 1rem;
  }

  svg {
    width: 2rem;
    margin-right: 2rem;
  }
`;

export const HeroSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding: 0 1rem 0.5rem 4rem;
  z-index: 2;

  color: ${COLORS.light}
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;

  &.heroOpen {
    position: fixed;
    top: 0;

    * {
      animation: fade-in .7s cubic-bezier(0.5,0,0,1) forwards;
    }

    .Title {
      animation: slide-in .7s cubic-bezier(0.5,0,0,1) forwards;
    }
    .Lead {
      animation: slide-in .7s cubic-bezier(0.5,0,0,1) forwards;
      animation-delay: 0.05s;
    }
  }
`;

export const Image = styled.div`
  height: 75%;
  position: absolute;
  top: 50%;
  right: 18.75vw;
  width: 80vw;

  background-position: center center;
  background-size: cover;

  cursor: pointer;
  filter: brightness(50%);
  object-fit: cover;
  transform: translateY(-50%);
  transition: filter 300ms, width 500ms cubic-bezier(1, 0, 0, 1),
    height 500ms cubic-bezier(1, 0, 0, 1), right 500ms cubic-bezier(1, 0, 0, 1);
  z-index: 0;

  &:hover {
    filter: brightness(100%);
  }

  ${props =>
    props.fullWidth &&
    `
    filter: brightness(70%);
    height: 100vh;
    right: 0;
    width: 100vw;
`};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 1rem;
  width: 100%;
  z-index: 1;

  color: ${COLORS.light};
  font-size: 0.75rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;

  p {
    margin: 0;
  }

  span {
    opacity: 0.67;
    font-style: italic;
    font-weight: 100;
    text-transform: none;
  }
`;

export const Lead = styled.p`
  font-family: ${FONTS.sansSerif};
  font-weight: 700;
  letter-spacing: 0.05vw;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 10vw;
  font-family: "Tiempos Headline", serif;
  line-height: 1.25;
  margin: 1rem 0;
  z-index: 0;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
