import React, { Component } from "react";
import styled from "styled-components";

import TextSection from "./TextSection";
import Highlight from "./Highlight";

const Section = styled.article`
  display: flex;
`;

const Quote = styled.blockquote`
  font-family: ${props => (props.theme ? props.theme.fonts.serif : "serif")};
  font-size: 2vw;
  font-style: italic;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.13rem;

  &:before {
    content: "» ";
    opacity: 0.33;
  }
  &:after {
    content: " «";
    opacity: 0.33;
  }
`;

export default class QuoteSection extends Component {
  render() {
    const { section, page } = this.props;
    return (
      <Section className="QuoteSection" id={`page-${page}`}>
        <Highlight align={"center"} className="Highlight">
          <Quote>{section.quote}</Quote>
        </Highlight>
        <TextSection content={section.content} />
      </Section>
    );
  }
}
