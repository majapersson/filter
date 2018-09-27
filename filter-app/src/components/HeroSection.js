import React, { Component } from "react";
import styled from "styled-components";

import HeroButton from "./HeroButton";

const Hero = styled.article`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: ${props => (props.theme ? `${props.theme.colors.light}` : "#fff")}
  background-size: cover;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Topbar = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  padding-top: 3rem;
  padding-right: 6rem;
  position: relative;
  width: 60%;

  font-size: 1rem;
  letter-spacing: 0.05rem;
`;

const ReadTime = styled.div`
  font-weight: 100;

  span {
    opacity: 0.67;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem 0 6.75vw;
  position: relative;
  margin-top: 6.75vw;
`;

const Title = styled.h1`
  font-family: "Tiempos Headline", serif;
  font-size: 6.75vw;
  line-height: 1.125;
  margin-top: 0;
  text-align: right;
  transform: margin 300ms;
`;

const Author = styled.p`
  text-transform: uppercase;
  margin: 0;

  i {
    font-family: "National LI", sans-serif;
    opacity: 0.67;
    text-transform: none;
  }
`;

const Magazine = styled.p`
  font-size: 75%;
  opacity: 0.67;
  text-transform: uppercase;
  margin: 0;
`;

const Lead = styled.p`
  flex-basis: 25vw;
  flex-shrink: 0;
  font-size: 1.5vw;
  font-weight: 700;
  margin-left: 6vw;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 35vw;
  padding-right: 6.75vw;
`;

export default class HeroSection extends Component {
  render() {
    const { author, magazine, title, lead, image } = this.props.article;
    return (
      <Hero
        className="HeroSection"
        style={{ backgroundImage: `url(${image.sizes.large})` }}
      >
        <Overlay className="Overlay" />
        <Topbar>
          <div>
            <Author>
              <i>Text:</i> <span>{author.name}</span>
            </Author>
            <Magazine>
              Publicerad i Filter #{magazine.title} ({magazine.published})
            </Magazine>
          </div>
          <ReadTime>
            <span>Lästid:</span> 92min
          </ReadTime>
        </Topbar>
        <Main>
          <Title>{title}</Title>
          <Lead>
            {lead
              .split(" ")
              .slice(0, 20)
              .join(" ")}
          </Lead>
        </Main>
        <ButtonGroup>
          <HeroButton title={"Läs artikeln"} url={"#"} />
          <HeroButton title={"Stäng"} url={"#"} close={true} />
        </ButtonGroup>
      </Hero>
    );
  }
}
