import React, { Component } from "react";
import { COLORS } from "../Helpers";

const theme = {
  colors: {
    bg: COLORS.bg,
    fg: COLORS.fg
  },
  font: {
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
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, handleSettings: this.handleSettings }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
