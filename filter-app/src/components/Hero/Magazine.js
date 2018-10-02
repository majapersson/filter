import React from "react";
import styled from "styled-components";

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

  background-color: ${props => props.theme.colors.light};
  opacity: 0.67;
`;

const Magazine = ({ magazine }) => (
  <Style>
    {window.innerWidth > 400 ? (
      <React.Fragment>
        Publicerad i Filter #{magazine.title} ({magazine.published}
      </React.Fragment>
    ) : (
      <React.Fragment>
        #{magazine.title} <Line /> {magazine.published}
      </React.Fragment>
    )}
  </Style>
);

export default Magazine;
