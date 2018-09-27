import React, { Component } from "react";

import ScrollContainer from "../components/HOC/ScrollContainer";
import Navigation from "../components/navigation/Navigation";
import Progress from "../components/navigation/Progress";

import HeroSection from "../components/HeroSection";
import ImageSection from "../components/ImageSection";
import QuoteSection from "../components/QuoteSection";

import { API_ROOT } from "../Helpers.js";

export default class Article extends Component {
  state = {
    article: {
      id: null,
      author: null,
      magazine: null,
      lead: null,
      image: null,
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
        title: article.post_title,
        author: {
          name: fields.author.post_title,
          id: fields.author.ID
        },
        magazine: {
          title: fields.magazine.post_title,
          published: fields.magazine.published
        },
        lead: fields.lead,
        image: fields.image,
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
      <ScrollContainer>
        {({ progress }) => (
          <div>
            <Navigation />
            <Progress
              progress={progress}
              sections={
                article.sections !== null ? article.sections.length : ""
              }
            />
            {article.id === null ? (
              <div>Loading...</div>
            ) : (
              <section className="Article">
                <HeroSection article={article} />
                {article.sections.map(
                  (section, index) =>
                    section.acf_fc_layout === "image_section" ? (
                      <ImageSection
                        section={section}
                        key={index}
                        page={index + 1}
                      />
                    ) : section.acf_fc_layout === "quote_section" ? (
                      <QuoteSection
                        section={section}
                        key={index}
                        page={index + 1}
                      />
                    ) : null
                )}
              </section>
            )}
          </div>
        )}
      </ScrollContainer>
    );
  }
}
