import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Navigation from "./components/navigation/Navbar/Navigation";
import Article from "./pages/Article";
import Home from "./pages/Home";

class Router extends Component {
  render() {
    const theme = {
      colors: {
        dark: "#000",
        light: "#fff",
        bg: "#fff",
        fg: "#000"
      },
      fonts: {
        serif: "Tiempos Regular, serif",
        sansSerif: "National, sans-serif"
      },
      margins: {
        small: "1rem",
        medium: "3rem",
        large: "6rem"
      }
    };
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
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
