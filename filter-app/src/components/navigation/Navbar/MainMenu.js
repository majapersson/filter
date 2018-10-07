import React, { Component } from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../../../Helpers";

const Item = styled.li`
  font-size: 2rem;
  font-family: ${FONTS.sansSerif};
  line-height: 1.5;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.dark};
  height: 100vh;
  padding-left: 18.75vw;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  z-index: 2;

  color: ${COLORS.light};
  list-style: none;
  transform: translateX(100%);
  transition: transform 500ms cubic-bezier(0.5, 0, 0, 1);
`;

class MainMenu extends Component {
  render() {
    return (
      <List style={{ transform: this.props.expanded && "translateX(0)" }}>
        <Item>Hem</Item>
        <Item>Magasinet</Item>
        <Item>Shop</Item>
        <Item>Filterbubblan</Item>
        <Item>Kontakt</Item>
        <Item>Logga in</Item>
        <Item>Registrera</Item>
        <Item>Prenumerera</Item>
      </List>
    );
  }
}

export default MainMenu;
