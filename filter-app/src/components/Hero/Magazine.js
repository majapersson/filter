import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Helpers";
import ContentContext from "../../context/ContentContext";

const Style = styled.p`
  font-weight: 400;
  letter-spacing: 0.03rem;
  opacity: 0.67;
  text-transform: uppercase;
  margin: 0;
`;

const Line = styled.span`
  display: inline-block;
  height: 1px;
  margin: 0 0.5rem;
  vertical-align: middle;
  width: 1.5rem;

  background-color: ${props => COLORS[props.color]};
  opacity: 0.67;
`;

const Magazine = ({ color, magazine, style }) => (
  <ContentContext.Consumer>
    {({ magazine }) => (
      <Style style={{ ...style }}>
        <React.Fragment>
          #{magazine.title} <Line color={color} /> {magazine.published}
        </React.Fragment>
      </Style>
    )}
  </ContentContext.Consumer>
);

export default Magazine;
