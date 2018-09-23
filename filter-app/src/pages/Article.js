import React, { Component } from "react";
import { API_ROOT } from "../Helpers.js";

export default class Article extends Component {
  state = {
    article: {
      id: null,
      author: null,
      magazine: null,
      lead: null,
      sections: null
    }
  };

  render() {
    return (
      <section>
      </section>
    );
  }
}
