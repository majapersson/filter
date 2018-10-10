import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../../Helpers";
import {
  Image,
  Info,
  HeroSection,
  Lead,
  Main,
  Middle,
  Overlay,
  Title,
  Top
} from "./styles";

import ContentContext from "../../context/ContentContext";
import ArrowButton from "./ArrowButton";
import CloseButton from "./CloseButton";
import Magazine from "./Magazine";

class Hero extends Component {
  state = {
    redirect: false
  };

  delayLink = async (e, url) => {
    if (this.props.toggleFull) {
      this.props.toggleFull();
      if (url !== "/") {
        const data = await fetch(`${API_ROOT}${url}`).then(data => data.json());
        localStorage.setItem("article", JSON.stringify(data));
      }
    }

    setTimeout(() => {
      this.setState({ redirect: true });
    }, 500);
  };

  render() {
    const { closeHero, fullWidth, heroOpen } = this.props;
    return (
      <ContentContext.Consumer>
        {({ author, id, image, lead, magazine, photo, title, type }) => (
          <HeroSection
            className={`Hero ${heroOpen ? "heroOpen" : ""}`}
            style={{}}
          >
            {this.state.redirect && (
              <Redirect to={heroOpen ? `/article/${id}` : "/"} />
            )}
            <Overlay
              className="Overlay"
              style={{ backgroundColor: heroOpen && "rgba(0, 0, 0, 0.9)" }}
            />
            <Main>
              {heroOpen ? (
                <Image
                  style={{ backgroundImage: `url(${image.sizes.large})` }}
                  fullWidth={fullWidth}
                />
              ) : (
                <Image
                  style={{ backgroundImage: `url(${image.sizes.large})` }}
                  fullWidth={!fullWidth}
                />
              )}
              <Top>
                <Magazine color={"light"} />
                <CloseButton
                  url={heroOpen ? "#" : "/"}
                  toggle={heroOpen ? closeHero : this.delayLink}
                />
              </Top>
              <Middle>
                <Title className="Title" style={heroOpen && { opacity: 0 }}>
                  {title}
                </Title>
                <Lead className="Lead">
                  {lead
                    .split(" ")
                    .slice(0, 25)
                    .join(" ")}
                </Lead>
              </Middle>
              <ArrowButton
                title={heroOpen ? "Läs artikel" : "Scrolla ner"}
                url={heroOpen ? `/article/${id}` : "#"}
                toggle={heroOpen && this.delayLink}
                right={heroOpen && "true"}
              />
            </Main>
            <Info style={{ opacity: fullWidth && 0 }}>
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
export default Hero;
