import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { injectGlobal, ThemeProvider } from "styled-components";

import Article from "./pages/Article";

const GlobalStyles = injectGlobal`
  @font-face {
    font-family: "National";
    src: url("/assets/fonts/NationalWeb-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Tiempos Bold";
    src: url("/assets/fonts/TiemposTextBold.ttf") format("truetype");
  }

  * {
    box-sizing: border-box;
  }

  body {
    color: #333;
    font-family: "National", sans-serif;
    line-height: 1.75;
  }
`;

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
        serif: "Tiempos Bold, serif",
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
        <Switch>
          <ThemeProvider theme={theme}>
            <Route path="/:id" render={props => <Article {...props} />} />
          </ThemeProvider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
