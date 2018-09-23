import React, { Component } from "react";
import styled from "styled-components";

import TextSection from "./TextSection";
import Highlight from "./Highlight";

const Section = styled.article`
  display: flex;
`;

const Quote = styled.blockquote`
  font-size: 2vw;
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
    const { article, section, part } = this.props;
    return (
      <Section className="QuoteSection">
        <Highlight align={"center"} className="Highlight">
          <Quote>{section.quote}</Quote>
        </Highlight>
        <TextSection content={section.content} />
      </Section>
    );
  }
}
