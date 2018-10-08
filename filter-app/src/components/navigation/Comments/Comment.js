import React, { Component } from "react";
import styled from "styled-components";
import { COLORS } from "../../../Helpers";

import ContentContext from "../../../context/ContentContext";

const Author = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;

  ${props => props.author && `color: ${COLORS.accent}`};

  span {
    color: ${COLORS.dark};
    font-size: 0.75rem;
    opacity: 0.33;
    text-transform: uppercase;
  }
`;

const Content = styled.p`
  margin: 0;
`;

const Wrapper = styled.li`
  margin: 1rem 0;
  padding: 0.5rem 1.25rem 1rem 0.5rem;

  background-color: #f9f9f9;
  line-height: 1.2;

  ${props => props.author && `border-right: 0.5rem solid ${COLORS.accent}`};
`;

class Comment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <Wrapper author={comment.articleAuthor}>
        <Author author={comment.articleAuthor}>
          {comment.articleAuthor ? (
            <ContentContext.Consumer>
              {({ author }) => author.name}
            </ContentContext.Consumer>
          ) : (
            comment.author
          )}{" "}
          <span>{comment.published}</span>
        </Author>
        <Content>{comment.content}</Content>
      </Wrapper>
    );
  }
}

export default Comment;
