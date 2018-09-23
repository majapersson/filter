import React, { Component } from "react";
import HeroSection from "../components/HeroSection";

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

  getData = async id => {
    const article = await fetch(`${API_ROOT}/articles/${id}`).then(data =>
      data.json()
    );
    const { fields } = article;
    this.setState({
      article: {
        id: article.ID,
        author: {
          name: fields.author.post_title,
          id: fields.author.ID
        },
        magazine: fields.magazine.post_title,
        lead: fields.lead,
        sections: fields.sections
      }
    });
  };

  componentWillMount() {
    this.getData(this.props.match.params.id);
  }

  render() {
    const { article } = this.state;
    console.log(article);
    return (
      <section>
        {article.id === null ? (
          <div>Loading...</div>
        ) : (
          article.sections.map((section, index) => {
            if (section.acf_fc_layout === "hero_section") {
              return (
                <HeroSection
                  article={article}
                  section={section}
                  key={index}
                  part={index + 1}
                />
              );
            }
          })
        )}
      </section>
    );
  }
}
