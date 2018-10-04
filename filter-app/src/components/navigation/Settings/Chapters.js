import React from "react";
import styled from "styled-components";

const ChapterList = styled.ul`
  flex-grow: 2;
  padding: 0;
`;

const Chapter = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  padding-left: 1.25rem;

  font-size: 1rem;

  &:first-child {
    font-weight: 700;
    text-transform: uppercase;
  }

  ${props =>
    props.active &&
    ` font-weight: 700;

      span {
        background: ${props.theme.colors.dark};
        color: ${props.theme.colors.light};
      }
    `};
`;

const Page = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3rem;
  ${props =>
    props.theme &&
    `
  color: ${props.theme.colors.dark};
  `};
`;

const Chapters = ({ article, page }) => (
  <ChapterList>
    <Chapter first>Artikelindex</Chapter>
    {article.sections.map((item, index) => (
      <Chapter key={index} active={index + 1 === page}>
        {item.title} <Page>{index + 1}</Page>
      </Chapter>
    ))}
  </ChapterList>
);

export default Chapters;
