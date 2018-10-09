import React, { Component } from "react";

import ScrollProvider, {
  ProgressContext
} from "../components/HOC/ScrollProvider";
import Expand from "../components/HOC/Expand";
import { ContentProvider } from "../context/ContentContext";

import Navigation from "../components/navigation/Navbar";
import Progress from "../components/navigation/Progress";
import Settings from "../components/navigation/Settings";
import Comments from "../components/navigation/Comments";

import Hero from "../components/Hero";
import ImageSection from "../components/ImageSection";
import QuoteSection from "../components/QuoteSection";

export default class Article extends Component {
  state = {
    article: null,
    progress: 0
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
    const article = JSON.parse(localStorage.getItem("article"));
    this.setState({ article });
    const stored = JSON.parse(localStorage.getItem("progress"));

    const progress =
      stored &&
      stored.find(item => item.article === this.props.match.params.id);
    this.setState({
      progress:
        progress !== undefined && progress !== null ? progress.progress : 0
    });
  }

  render() {
    const { article } = this.state;
    return (
      <React.Fragment>
        <ContentProvider article={article}>
          <ScrollProvider pages={article && article.sections.length}>
            <ProgressContext.Consumer>
              {({ scrollTop }) => (
                <Navigation overlay={scrollTop > window.innerHeight} />
              )}
            </ProgressContext.Consumer>
            <Expand>
              {({ expanded: settings, toggleExpand: toggleSettings }) => (
                <Expand>
                  {({ expanded: comments, toggleExpand: toggleComments }) => (
                    <React.Fragment>
                      <Progress
                        sections={article && article.sections.length}
                        toggleSettings={toggleSettings}
                        toggleComments={toggleComments}
                      />
                      {article && (
                        <Settings expanded={settings} close={toggleSettings} />
                      )}
                      <Comments expanded={comments} close={toggleComments} />
                    </React.Fragment>
                  )}
                </Expand>
              )}
            </Expand>
          </ScrollProvider>

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
