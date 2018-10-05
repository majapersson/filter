import { Component } from "react";
import { withRouter } from "react-router-dom";
import { throttle } from "../../Helpers";

class ScrollContainer extends Component {
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

    if (prevProgress.length !== 0) {
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

  componentWillUnMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { children } = this.props;
    return children({
      progress: this.state.progress,
      page: this.state.page
    });
  }
}

export default withRouter(ScrollContainer);
