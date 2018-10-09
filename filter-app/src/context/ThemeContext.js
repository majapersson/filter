import React, { Component } from "react";
import { COLORS } from "../Helpers";

const theme = {
  colors: {
    bg: COLORS.bg,
    fg: COLORS.fg
  },
  font: {
    nightmode: 0,
    size: 1,
    spacing: 1.75
  }
};

const ThemeContext = React.createContext();

export class ThemeProvider extends Component {
  state = { ...theme };

  handleSettings = (setting, value) => {
    const font = { ...this.state.font };
    font[setting] = value;
    this.setState({ font });

    setting === "nightmode" && this.invertTheme();
  };

  invertTheme = () => {
    const colors = { ...this.state.colors };
    colors.bg = this.state.colors.fg;
    colors.fg = this.state.colors.bg;
    this.setState({ colors });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          handleSettings: this.handleSettings,
          invertTheme: this.invertTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
