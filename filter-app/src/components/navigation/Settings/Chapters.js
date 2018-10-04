import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../Helpers";

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
        background: ${COLORS.dark};
        color: ${COLORS.light};
      }
    `};
`;

const Page = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3rem;
  color: ${COLORS.dark};
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
