import "rc-slider/assets/index.css";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Slider from "rc-slider";

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Handle
      value={value}
      {...restProps}
      style={{ border: "none", backgroundColor: "#000" }}
    />
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
`;

export default class TextSlider extends Component {
  render() {
    return (
      <Wrapper>
        <Label htmlFor={this.props.name}>
          <this.props.icon />
        </Label>
        <Slider
          min={0.5}
          max={1.5}
          defaultValue={1}
          step={0.1}
          handle={handle}
          trackStyle={{ backgroundColor: "inherit" }}
          name={this.props.name}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}
