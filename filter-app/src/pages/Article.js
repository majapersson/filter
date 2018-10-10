import React, { Component } from "react";

import { API_ROOT } from "../Helpers";
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

export default class Article extends Component {
  state = {
    article: null,
    progress: 0
  };

  getData = async () => {
    const { id } = this.props.match.params;

    const article = await fetch(`${API_ROOT}/article/${id}`).then(data =>
      data.json()
    );
    this.setState({ article });
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

    if (article === null) {
      this.getData();
    } else {
      this.setState({ article });
    }

    const stored = JSON.parse(localStorage.getItem("progress"));

    const progress =
      stored &&
      stored.find(item => item.article === this.props.match.params.id);
    this.setState({
      article,
      progress:
        progress !== undefined && progress !== null ? progress.progress : 0
    });
  }

  render() {
    const { article } = this.state;
    return (
      <React.Fragment>
        {article && (
          <ContentProvider article={article}>
            <ScrollProvider pages={article !== null && article.sections.length}>
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
                          <Settings
                            expanded={settings}
                            close={toggleSettings}
                          />
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
                  <Expand>
                    {({ expanded: fullWidth, toggleExpand: toggleFull }) => (
                      <Hero fullWidth={fullWidth} toggleFull={toggleFull} />
                    )}
                  </Expand>
                  {article.sections.map(
                    (section, index) =>
                      section.acf_fc_layout === "image_section" ? (
                        <ImageSection
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
        )}
      </React.Fragment>
    );
  }
}
