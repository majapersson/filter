import "rc-slider/assets/index.css";
import React, { Component } from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import ThemeContext from "../../../context/ThemeContext";

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Handle
      value={value}
      {...restProps}
      style={{ border: "none", backgroundColor: "#000", marginTop: "-6px" }}
    />
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  margin-right: 0.5rem;
  width: 3rem;
`;

export default class TextSlider extends Component {
  render() {
    const { min, max, name, step } = this.props;
    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {({ font, handleSettings, invertTheme }) => (
            <Wrapper>
              <Label htmlFor={name}>
                <this.props.icon />
              </Label>
              <Slider
                min={min}
                max={max}
                value={font[name]}
                step={step ? step : (max - min) / 10}
                handle={handle}
                railStyle={{ height: "2px" }}
                trackStyle={{ backgroundColor: "inherit" }}
                name={name}
                onChange={value => handleSettings(name, value)}
              />
            </Wrapper>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}
