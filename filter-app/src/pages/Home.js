import React, { Component } from "react";
import styled from "styled-components";

import Navigation from "../components/navigation/Navbar";
import SlideWrapper from "../components/SlideWrapper";

import { API_ROOT } from "../Helpers";

const Main = styled.main`
  padding-top: 12rem;
  min-height: 100vh;
  overflow: hidden;

  background-color: ${props =>
    props.theme ? props.theme.colors.dark : "#000"};
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
        <Navigation />
        <Main role="main">
          {articles !== null ? <SlideWrapper articles={articles} /> : null}
        </Main>
      </React.Fragment>
    );
  }
}
