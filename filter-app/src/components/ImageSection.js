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
    inView: null
  };

  handleObserver = () => {
    this.state.inView === null
      ? this.setState({ inView: false })
      : this.setState({ inView: !this.state.inView });
  };

  componentDidMount() {
    const links = document.querySelectorAll(".target");

    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver(this.handleObserver, options);

    links.forEach(target => {
      observer.observe(target);
    });
  }

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
              >
                <ExpandButton inView={this.state.inView} />
              </Highlight>
              <TextSection expanded={expanded} content={section.content} />
            </React.Fragment>
          )}
        </Expand>
      </Section>
    );
  }
}
