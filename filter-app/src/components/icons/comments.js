import React from "react";

const Comments = ({ toggle, style }) => (
  <svg viewBox="0 0 24 16" style={{ ...style }} onClick={toggle}>
    <path
      fill="#000"
      fillRule="nonzero"
      d="M8 0h8a8 8 0 0 1 8 8v8H8A8 8 0 1 1 8 0zM6 5a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H6zm0 4a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H6z"
    />
  </svg>
);

export default Comments;
