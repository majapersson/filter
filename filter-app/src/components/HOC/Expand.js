import { Component } from "react";

export default class Expand extends Component {
  state = {
    expanded: false
  };

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const { children } = this.props;
    return children({
      expanded: this.state.expanded,
      toggleExpand: this.expand
    });
  }
}
