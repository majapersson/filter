import React, { Component } from "react";
import {
  Author,
  Info,
  HeroSection,
  Main,
  Overlay,
  ReadTime,
  Title
} from "./styles";

import ArrowButton from "./ArrowButton";
import CloseButton from "./CloseButton";
import Magazine from "./Magazine";

export default class Hero extends Component {
  delayLink = (e, url) => {
    console.log("Delaying...");
    e.preventDefault();

    this.props.toggleFull();

    setTimeout(function() {
      window.location = url;
    }, 500);
  };

  render() {
    const { article, heroOpen, closeHero } = this.props;
    const { author, magazine, title, lead, image, photo, type } = article;
    return (
      <HeroSection
        className={`Hero ${heroOpen ? "heroOpen" : ""}`}
        style={
          heroOpen
            ? {}
            : {
                backgroundImage: `url(${image.sizes.large})`
              }
        }
      >
        <Overlay className="Overlay" />
        <Main>
          <Magazine magazine={magazine} />
          <Title className="Title" style={heroOpen ? { opacity: 0 } : {}}>
            {title}
          </Title>
          <ArrowButton
            title={heroOpen ? "Läs artikeln" : "Scrolla ner"}
            url={heroOpen ? `/article/${article.id}` : "#"}
            toggle={heroOpen ? this.delayLink : () => {}}
          />
          <CloseButton
            url={heroOpen ? "#" : "/"}
            toggle={heroOpen ? closeHero : this.delayLink}
          />
        </Main>
        <Info>
          <div>
            <p>{type}</p>
            <p>
              <span>Lästid:</span> 92 min
            </p>
          </div>
          <div>
            <p>
              <span>Text:</span> {author.name}
            </p>
            {photo ? (
              <p>
                <span>Foto: </span> {photo}
              </p>
            ) : null}
          </div>
        </Info>
      </HeroSection>
    );
  }
}
