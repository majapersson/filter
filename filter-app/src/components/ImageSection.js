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
  state = {
    clicked: false
  };

  toggleButton = () => {
    this.setState({ clicked: true });
  };

  render() {
    const { section, page } = this.props;
    return (
      <Section className="ImageSection" id={`page-${page}`}>
        <Expand>
          {({ expanded, toggleExpand }) => (
            <React.Fragment>
              <Highlight
                image={section.image.url}
                align={"right"}
                className="Highlight"
                expanded={expanded}
                toggle={toggleExpand}
                toggleButton={this.toggleButton}
              >
                <ExpandButton
                  toggleHighlight={toggleExpand}
                  toggleButton={this.toggleButton}
                  expanded={expanded}
                  clicked={this.state.clicked}
                />
              </Highlight>
              <TextSection content={section.content} />
            </React.Fragment>
          )}
        </Expand>
      </Section>
    );
  }
}
