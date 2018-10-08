import React, { Component } from "react";
import styled from "styled-components";

import data from "../../../comments.json";
import { Container } from "../Settings";
import { Subheader } from "../Settings/Chapters";
import Header from "../Settings/Header";
import Comment from "./Comment";
import Footer from "./Footer";

const List = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding: 0 1.25rem;
`;

class Comments extends Component {
  render() {
    const { expanded, close } = this.props;
    return (
      <Container expanded={expanded}>
        <Header />
        <List>
          <Subheader style={{ margin: 0 }}>
            Kommentera artikel
            <span>25 kommentarer</span>
          </Subheader>
          {data.map((item, index) => <Comment comment={item} key={index} />)}
        </List>
        <Footer close={close} />
      </Container>
    );
  }
}

export default Comments;
