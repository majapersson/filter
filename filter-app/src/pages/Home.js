import React, { Component } from "react";
import styled from "styled-components";

import { ContentProvider } from "../context/ContentContext";
import HomeHero from "../components/Hero/HomeHero";
import Navigation from "../components/navigation/Navbar";
import SlideWrapper from "../components/SlideWrapper";

import Expand from "../components/HOC/Expand";
import { API_ROOT, COLORS } from "../Helpers";

const Main = styled.main`
  min-height: 100vh;
  overflow: hidden;

  background-color: ${COLORS.dark};
`;

export default class Home extends Component {
  state = {
    articles: null
  };

  getData = async () => {
    const articles = await fetch(`${API_ROOT}/articles/`).then(data =>
      data.json()
    );
    this.setState({ articles });
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    const { articles } = this.state;
    return (
      <React.Fragment>
        <Navigation dark />
        <Main role="main">
          {articles && (
            <React.Fragment>
              <ContentProvider article={articles[0]}>
                <Expand>
                  {({ expanded: fullWidth, toggleExpand: toggleFull }) => (
                    <HomeHero toggleFull={toggleFull} fullWidth={fullWidth} />
                  )}
                </Expand>
              </ContentProvider>
              <SlideWrapper articles={articles} />
            </React.Fragment>
          )}
        </Main>
      </React.Fragment>
    );
  }
}
