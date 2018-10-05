import React, { Component } from "react";

import { API_ROOT } from "../../Helpers";
import ContentContext from "../../context/ContentContext";
import { Image, Lead, HeroSection, Main, Title } from "./styles";
import ArrowButton from "./ArrowButton";
import Magazine from "./Magazine";

class HomeHero extends Component {
  delayLink = async (e, url) => {
    console.log("Delaying...");
    e.preventDefault();

    if (this.props.toggleFull) {
      this.props.toggleFull();
      const data = await fetch(`${API_ROOT}${url}`).then(data => data.json());
      localStorage.setItem("article", JSON.stringify(data));
    }

    setTimeout(function() {
      window.location = url;
    }, 500);
  };

  render() {
    return (
      <ContentContext.Consumer>
        {({ id, image, lead, title }) => (
          <HeroSection className={"Hero"}>
            <Image
              style={{ backgroundImage: `url(${image.sizes.large})` }}
              fullWidth={this.props.fullWidth}
            />
            <Main>
              <Magazine color={"light"} />
              <Title className="Title">{title}</Title>
              <Lead>
                {lead
                  .split(" ")
                  .slice(0, 25)
                  .join(" ")}
              </Lead>
              <ArrowButton
                title={"Läs artikeln"}
                url={`/article/${id}`}
                toggle={this.delayLink}
                right={true}
              />
            </Main>
          </HeroSection>
        )}
      </ContentContext.Consumer>
    );
  }
}

export default HomeHero;
