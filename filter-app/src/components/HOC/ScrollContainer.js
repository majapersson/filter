import { Component } from "react";
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

export default ScrollContainer;
