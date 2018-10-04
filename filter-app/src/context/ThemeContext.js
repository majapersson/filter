import React, { Component } from "react";
import { colors } from "../Helpers";

const theme = {
  colors: {
    bg: colors.bg,
    fg: colors.fg
  },
  font: {
    size: 1,
    spacing: 1.75
  }
};

const ThemeContext = React.createContext();

export class ContextProvider extends Component {
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
