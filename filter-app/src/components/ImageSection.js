import React, { Component } from "react";
import styled from "styled-components";

import TextSection from "./TextSection";
import Highlight from "./Highlight";
import ExpandButton from "./ExpandButton";
import Expand from "./HOC/Expand";

const Section = styled.section`
  display: flex;
`;

export default class ImageSection extends Component {
  render() {
    const { article, section, page } = this.props;
    return (
      <Section className="ImageSection" id={`page-${page}`}>
        <Expand>
          {({ expanded, toggle }) => (
            <Highlight
              image={section.image.url}
              align={"right"}
              className="Highlight"
              style={{
                justifyContent: "flex-start",
                flexBasis: expanded ? "100%" : "37.5%"
              }}
            >
              <ExpandButton toggle={toggle} expanded={expanded} />
            </Highlight>
          )}
        </Expand>
        <TextSection content={section.content} lead={article.lead} />
      </Section>
    );
  }
}
