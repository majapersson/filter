import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Article from "./pages/Article";
import Home from "./pages/Home";
import { ContextProvider } from "./ThemeContext";

class Router extends Component {
  render() {
    const theme = {
      colors: {
        accent: "#FFDD1F",
        dark: "#000",
        light: "#fff",
        bg: "#fff",
        fg: "#000"
      },
      fonts: {
        serif: "Tiempos Regular, serif",
        sansSerif: "National, sans-serif",
        size: 1,
        spacing: 1.75
      },
      margins: {
        small: "1rem",
        medium: "3rem",
        large: "6rem"
      }
    };
    return (
      <BrowserRouter>
        <ContextProvider>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/" render={props => <Home {...props} />} />
              <Route
                path="/article/:id"
                render={props => <Article {...props} />}
              />
            </Switch>
          </ThemeProvider>
        </ContextProvider>
      </BrowserRouter>
    );
  }
}

export default Router;
