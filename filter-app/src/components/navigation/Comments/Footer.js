import React, { Component } from "react";
import styled from "styled-components";

import { FONTS } from "../../../Helpers";
import { Close } from "../Settings/Footer";
import X from "../../icons/x";

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  height: 6rem;
  margin: 0 1.25rem;
  padding: 0.5rem 0;
  position: fixed;
  bottom: 0;
  width: calc(100% - 4.5rem);

  border-top: 0.5rem solid #f9f9f9;

  input,
  button {
    font-family: ${FONTS.sansSerif};
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  input {
    flex-grow: 1;
    resize: none;
  }

  button {
    border: none;
    background-color: transparent;
    flex-shrink: 0;
    font-size: 0.875rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-basis: 9rem;
  flex-shrink: 0;
  height: 9rem;
  padding-right: 3rem;
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Form>
          <input
            type="text"
            name="comment"
            placeholder="Skriv en kommentar..."
          />
          <button type="submit">Skicka</button>
        </Form>
        <Close onClick={this.props.close}>
          <X style={{ fill: "#FFF" }} />
        </Close>
      </Wrapper>
    );
  }
}

export default Footer;
