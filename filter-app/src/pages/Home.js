import React, { Component } from "react";
import styled from "styled-components";

import Navigation from "../components/navigation/Navigation";
import { API_ROOT } from "../Helpers";

const Main = styled.main`
  padding-top: 12rem;
  min-height: 100vh;

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
        <Navigation user={"Peter Bartel"} />
        <Main role="main">
        </Main>
      </React.Fragment>
    );
  }
}
