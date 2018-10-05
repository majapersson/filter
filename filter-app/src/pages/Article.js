import React, { Component } from "react";

import ScrollContainer from "../components/HOC/ScrollContainer";
import Expand from "../components/HOC/Expand";
import { ContentProvider } from "../context/ContentContext";

import Navigation from "../components/navigation/Navbar";
import Progress from "../components/navigation/Progress";
import Settings from "../components/navigation/Settings";

import Hero from "../components/Hero";
import ImageSection from "../components/ImageSection";
import QuoteSection from "../components/QuoteSection";

import { API_ROOT } from "../Helpers.js";

export default class Article extends Component {
  state = {
    article: null,
    progress: 0
  };

  getData = async id => {
    // const article = await fetch(`${API_ROOT}/article/${id}`).then(data =>
    //   data.json()
    // );
  };

  componentDidMount() {
    const { progress } = this.state;

    window.scroll({
      left: 0,
      top: (progress / 100) * document.scrollingElement.scrollHeight,
      behavior: "smooth"
    });
  }

  componentWillMount() {
    // this.getData(this.props.match.params.id);
    const article = JSON.parse(localStorage.getItem("article"));
    this.setState({ article });
    const progress = JSON.parse(localStorage.getItem("progress")).find(
      item => item.article === this.props.match.params.id
    );
    this.setState({ progress: progress.progress });
  }

  render() {
    const { article } = this.state;
    return (
      <React.Fragment>
        <ContentProvider article={article}>
          <Navigation dark />
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
            {article && (
              <section className="Article">
                <Hero />
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
        </ContentProvider>
      </React.Fragment>
    );
  }
}
