import React, { Component } from "react";
import TextSection from "./TextSection";

export default class HeroSection extends Component {
  render() {
    const { article, section, part } = this.props;
    return (
      <article>
        <h2>Part {part}</h2>
        <TextSection content={section.content} lead={article.lead} />
      </article>
    );
  }
}
