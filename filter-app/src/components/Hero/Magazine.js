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

const Magazine = ({ magazine, color }) => (
  <ContentContext.Consumer>
    {({ magazine }) => (
      <Style>
        {window.innerWidth > 400 ? (
          <React.Fragment>
            Publicerad i Filter #{magazine.title} ({magazine.published}
          </React.Fragment>
        ) : (
          <React.Fragment>
            #{magazine.title} <Line color={color} /> {magazine.published}
          </React.Fragment>
        )}
      </Style>
    )}
  </ContentContext.Consumer>
);

export default Magazine;
