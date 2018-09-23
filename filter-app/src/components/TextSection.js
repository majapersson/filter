import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";

class TextSection extends Component {
  render() {
    return (
      <section>
        <p className="lead-paragraph">{this.props.lead}</p>
        {ReactHtmlParser(this.props.content)}
      </section>
    );
  }
}

export default TextSection;
