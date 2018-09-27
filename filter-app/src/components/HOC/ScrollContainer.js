import { Component } from "react";
import { throttle } from "../../Helpers";

class ScrollContainer extends Component {
  state = {
    progress: 0
  };

  handleScroll = () => {
    const { scrollHeight, scrollTop } = document.scrollingElement;
    const progress = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
    this.setState({ progress });
  };

  componentDidMount() {
    window.addEventListener("scroll", throttle(this.handleScroll, 50));
  }

  componentWillUnMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { children } = this.props;
    return children({
      progress: this.state.progress
    });
  }
}

export default ScrollContainer;
