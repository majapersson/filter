import React from "react";
import styled from "styled-components";

import X from "../../icons/x";

export const Close = styled.div`
  height: 3rem;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 3rem;

  ${props => props.theme && `background-color: ${props.theme.colors.dark}`};
`;

export const Setting = styled.div``;

export const Wrapper = styled.div`
  height: 9rem;
  position: relative;
`;

const SettingsBox = ({ close }) => (
  <Wrapper>
    <div />
    <Close onClick={close}>
      <X />
    </Close>
  </Wrapper>
);

export default SettingsBox;
