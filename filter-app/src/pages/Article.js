import React, { Component } from "react";

import ScrollContainer from "../components/HOC/ScrollContainer";
import Navigation from "../components/navigation/Navbar/Navigation";
import Progress from "../components/navigation/Progress";

import Hero from "../components/Hero";
import ImageSection from "../components/ImageSection";
import QuoteSection from "../components/QuoteSection";

import { API_ROOT } from "../Helpers.js";

export default class Article extends Component {
  state = {
    article: null
  };

  getData = async id => {
    const article = await fetch(`${API_ROOT}/articles/${id}`).then(data =>
      data.json()
    );
    this.setState({ article });
  };

  componentWillMount() {
    this.getData(this.props.match.params.id);
  }

  render() {
    const { article } = this.state;
    return (
      <ScrollContainer>
        {({ progress }) => (
          <React.Fragment>
            <Navigation user={"Peter Bartel"} />
            <Progress
              progress={progress}
              sections={article !== null ? article.sections.length : ""}
            />
            <main role="main">
              {article === null ? null : (
                <section className="Article">
                  <Hero article={article} />
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
            </main>
          </React.Fragment>
        )}
      </ScrollContainer>
    );
  }
}
