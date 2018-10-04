import React, { Component } from "react";
import styled from "styled-components";
import TextSlider from "./TextSlider";

import X from "../../icons/x";
import size from "../../icons/size";
import spacing from "../../icons/spacing";
import brightness from "../../icons/brightness";

const Close = styled.div`
  height: 3rem;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 3rem;

  ${props => props.theme && `background-color: ${props.theme.colors.dark}`};
`;

const Wrapper = styled.div`
  height: 9rem;
`;

class SettingsBox extends Component {
  render() {
    const { close } = this.props;
    return (
      <React.Fragment>
        <Wrapper>
          <TextSlider name={"size"} icon={size} />
          <TextSlider name={"spacing"} icon={spacing} />
          <TextSlider name={"brightness"} icon={brightness} />
        </Wrapper>
        <Close onClick={close}>
          <X style={{ fill: "#FFF" }} />
        </Close>
      </React.Fragment>
    );
  }
}

export default SettingsBox;
