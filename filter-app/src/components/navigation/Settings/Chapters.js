import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../Helpers";
import ContentContext from "../../../context/ContentContext";
import { ProgressContext } from "../../HOC/ScrollProvider";

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

export const Subheader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 0.25rem 0;
  margin: 0 1.25rem 0.5rem 1.25rem;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 700;
  text-transform: uppercase;

  span {
    font-weight: normal;
    text-transform: none;
    opacity: 0.67;
  }
`;

const Chapters = ({ page }) => (
  <ContentContext.Consumer>
    {({ sections }) => (
      <ProgressContext.Consumer>
        {({ page }) => (
          <ChapterList>
            <Subheader>Artikelindex</Subheader>

            {sections.map((item, index) => (
              <Chapter key={index} active={index + 1 === page}>
                {item.title} <Page>{index + 1}</Page>
              </Chapter>
            ))}
          </ChapterList>
        )}
      </ProgressContext.Consumer>
    )}
  </ContentContext.Consumer>
);

export default Chapters;
