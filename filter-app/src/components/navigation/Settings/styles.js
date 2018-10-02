import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  top: 0;
  transform: translate(-100%, 100%);
  transition: transform 500ms cubic-bezier(0.5, 0, 0, 1);
  width: 100%;
  z-index: 3;

  background-color: ${props => props.theme && props.theme.colors.light};
  ${props => props.expanded && "transform: translate(0, 0)"};
`;

export const Header = styled.div`
  display: flex;
  height: 6rem;
  padding-right: 5rem;

  > div {
    padding: 1rem;
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
`;
