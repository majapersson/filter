import React, { Component } from "react";
import styled from "styled-components";
import TextSlider from "./TextSlider";
import ThemeContext from "../../../context/ThemeContext";
import { COLORS } from "../../../Helpers";

import X from "../../icons/x";
import size from "../../icons/size";
import spacing from "../../icons/spacing";
import brightness from "../../icons/brightness";

export const Close = styled.div`
  background-color: ${COLORS.dark};
  height: 3rem;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  height: 9rem;
  padding: 0 1.25rem;
`;

const Settings = styled.div`
  flex-basis: 40%;
  flex-shrink: 0;
`;

const Demo = styled.p`
  overflow: hidden;
  margin: 1.25rem;
  margin-top: 0;
  padding: 0.5rem;
  flex-basis: 45%;
  flex-shrink: 0;
`;

class Footer extends Component {
  render() {
    const { close } = this.props;
    return (
      <React.Fragment>
        <Wrapper>
          <Settings>
            <TextSlider name={"size"} icon={size} min={0.75} max={2} />
            <TextSlider name={"spacing"} icon={spacing} min={1} max={3} />
            <TextSlider
              name={"nightmode"}
              icon={brightness}
              min={0}
              max={1}
              step={1}
            />
          </Settings>
          <ThemeContext.Consumer>
            {({ colors, font }) => (
              <Demo
                style={{
                  backgroundColor: colors.bg,
                  color: colors.fg,
                  fontSize: `${font.size}rem`,
                  lineHeight: font.spacing
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Demo>
            )}
          </ThemeContext.Consumer>
        </Wrapper>

        <Close onClick={close}>
          <X style={{ fill: "#FFF" }} />
        </Close>
      </React.Fragment>
    );
  }
}

export default Footer;
