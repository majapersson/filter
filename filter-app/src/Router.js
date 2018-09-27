import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { injectGlobal, ThemeProvider } from "styled-components";

import Article from "./pages/Article";

injectGlobal`
  @font-face {
    font-family: "National";
    src: url("/assets/fonts/National-Regular.otf") format("opentype");
    font-weight: 400;
  }

  @font-face {
    font-family: "National";
    src: url("/assets/fonts/National-Light.otf") format("opentype");
    font-weight: 100;
  }

  @font-face {
    font-family: "National";
    src: url("/assets/fonts/National-Bold.otf") format("opentype");
    font-weight: 700;
  }

  @font-face {
    font-family: "National LI";
    src: url("/assets/fonts/National-ThinItalic.otf") format("opentype");
  }

  @font-face {
    font-family: "Tiempos Headline";
    src: url("/assets/fonts/TiemposHeadline-Black.otf") format("opentype");
  }

  @font-face {
    font-family: "Tiempos Regular";
    src: url("/assets/fonts/TiemposText-Regular.otf") format("opentype");
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
