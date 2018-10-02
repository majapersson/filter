import styled from "styled-components";

export const Author = styled.p`
  text-transform: uppercase;
  margin: 0;

  i {
    font-family: "National LI", sans-serif;
    opacity: 0.67;
    text-transform: none;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  position: relative;
  margin-bottom: 2rem;

  span {
    display: inline-block;
    border-bottom: 0.25rem solid #fff;
    color: ${props => (props.theme ? `${props.theme.colors.light}` : "#fff")};
    font-size: 5vw;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.13rem;
    margin-right: 1rem;
  }

  svg {
    width: 2rem;
    margin-right: 3rem;
  }
`;

export const HeroSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100vh;
  padding: 0 1rem 0.5rem 4rem;
  z-index: 2;

  color: ${props => (props.theme ? `${props.theme.colors.light}` : "#fff")}
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;

  &.heroOpen {
    position: absolute;
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

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 100%;

  color: ${props => props.theme && `${props.theme.colors.light}`};
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

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 50%;

  div:last-child {
    align-self: flex-end;
  }
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

export const ReadTime = styled.div`
  font-weight: 100;

  span {
    opacity: 0.67;
  }
`;

export const Title = styled.h1`
  font-size: 10vw;
  font-family: "Tiempos Headline", serif;
  line-height: 1.25;
  margin: 1rem 0;
  z-index: 0;
`;
