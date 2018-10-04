import React, { Component } from "react";

import { Container, Header, Image, Title } from "./styles";
import Chapters from "./Chapters";
import SettingsBox from "./SettingsBox";
import Magazine from "../../Hero/Magazine";

class Settings extends Component {
  render() {
    const { article, expanded, close, page } = this.props;
    return (
      <Container expanded={expanded}>
        <Header>
          <Image src={article.image.sizes.thumbnail} />
          <div>
            <Title>{article.title}</Title>
            <Magazine magazine={article.magazine} />
          </div>
        </Header>
        <Chapters article={article} page={page} />
        <SettingsBox close={close} />
      </Container>
    );
  }
}

export default Settings;
