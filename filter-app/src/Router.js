import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { injectGlobal } from "styled-components";

import Article from "./pages/Article";

const GlobalStyles = injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    color: #333;
    font-family: 'Merriweather', serif;
    line-height: 1.75;
  }
`;

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:id" render={props => <Article {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
