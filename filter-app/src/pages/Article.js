import React, { Component } from "react";

import ScrollContainer from "../components/HOC/ScrollContainer";
import Expand from "../components/HOC/Expand";
import Navigation from "../components/navigation/Navbar";
import Progress from "../components/navigation/Progress";
import Settings from "../components/navigation/Settings";

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
      <React.Fragment>
        <Navigation transparent />
        <ScrollContainer pages={article && article.sections.length}>
          {({ progress, page }) => (
            <Expand>
              {({ expanded, toggleExpand }) => (
                <React.Fragment>
                  <Progress
                    page={page}
                    progress={progress}
                    sections={article && article.sections.length}
                    toggleSettings={toggleExpand}
                  />
                  {article && (
                    <Settings
                      article={article}
                      expanded={expanded}
                      close={toggleExpand}
                      page={page}
                    />
                  )}
                </React.Fragment>
              )}
            </Expand>
          )}
        </ScrollContainer>

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
    );
  }
}
