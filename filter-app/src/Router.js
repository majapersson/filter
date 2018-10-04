import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Article from "./pages/Article";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route
              path="/article/:id"
              render={props => <Article {...props} />}
            />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default Router;
