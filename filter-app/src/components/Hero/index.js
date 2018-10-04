import React, { Component } from "react";
import { Info, HeroSection, Main, Overlay, Title } from "./styles";

import ContentContext from "../../context/ContentContext";
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
    const { heroOpen, closeHero } = this.props;
    return (
      <ContentContext.Consumer>
        {({ author, id, image, lead, magazine, photo, title, type }) => (
          <HeroSection
            className={`Hero ${heroOpen ? "heroOpen" : ""}`}
            style={{
              backgroundImage: !heroOpen && `url(${image.sizes.large})`
            }}
          >
            <Overlay className="Overlay" />
            <Main>
              <Magazine color={"light"} />
              <Title className="Title" style={heroOpen && { opacity: 0 }}>
                {title}
              </Title>
              <ArrowButton
                title={heroOpen ? "Läs artikeln" : "Scrolla ner"}
                url={heroOpen ? `/article/${id}` : "#"}
                toggle={heroOpen && this.delayLink}
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
                {photo && (
                  <p>
                    <span>Foto: </span> {photo}
                  </p>
                )}
              </div>
            </Info>
          </HeroSection>
        )}
      </ContentContext.Consumer>
    );
  }
}
