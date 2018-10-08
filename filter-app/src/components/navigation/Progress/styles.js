import styled from "styled-components";
import { COLORS, FONTS } from "../../../Helpers";

export const Length = styled.div`
  flex-basis: calc(100% - 6rem);
  flex-grow: 0;
  flex-shrink: 0;
  // height: 55%;
  width: 0.125rem;
  background-color: rgba(0, 0, 0, 0.1);

  div {
    background-color: ${COLORS.dark};
  }
`;

export const Page = styled.span`
  font-family: ${FONTS.sansSerif};
  font-size: 1.25rem;
  font-weight: 300;
  span {
    font-size: 50%;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 37.5vh;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  padding: 0.75rem 0;
  width: 3rem;
  z-index: 2;

  background-color: ${COLORS.light};
  transition: all 300ms;
`;
