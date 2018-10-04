import React, { Component } from "react";

const ContentContext = React.createContext();

export class ContentProvider extends Component {
  render() {
    return (
      <ContentContext.Provider value={{ ...this.props.article }}>
        {this.props.children}
      </ContentContext.Provider>
    );
  }
}

export default ContentContext;
