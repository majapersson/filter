import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { throttle } from "../../Helpers";

export const ProgressContext = React.createContext();

class ScrollProvider extends Component {
  state = {
    progress: 0,
    page: 0
  };

  handleScroll = () => {
    const { scrollHeight, scrollTop } = document.scrollingElement;
    const progress = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
    const page = Math.floor((progress / 100) * this.props.pages) + 1;
    this.setState({ progress, page });
    this.storeProgress(progress);
  };

  storeProgress = progress => {
    let storage = JSON.parse(localStorage.getItem("progress"));

    if (!storage) storage = [];

    const { id } = this.props.match.params;

    const prevProgress = storage.find(item => item.article === id);

    if (prevProgress !== undefined) {
      prevProgress.progress = progress;
      storage.map(item => item.id === id && prevProgress);
    } else {
      storage.push({ article: id, progress: progress });
    }
    localStorage.setItem("progress", JSON.stringify(storage));
  };

  update = () => {
    this.handleScroll();
  };

  componentDidMount() {
    window.addEventListener("scroll", throttle(this.update, 100));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", throttle(this.update, 100));
  }

  render() {
    return (
      <ProgressContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProgressContext.Provider>
    );
  }
}

export default withRouter(ScrollProvider);
