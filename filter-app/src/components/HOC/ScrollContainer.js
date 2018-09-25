import React, { Component } from "react";
import throttle from "lodash.throttle";

class ScrollContainer extends Component {
  state = {
    progress: 0
  };

  handleScroll = () => {
    const { scrollHeight, scrollTop } = document.scrollingElement;
    const progress = (scrollTop / scrollHeight) * 100;
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
      // onScroll: this.throttleScroll
    });
  }
}

export default ScrollContainer;
