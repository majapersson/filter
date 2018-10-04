import React from "react";

const brightness = ({ style }) => (
  <svg width="16" height="16" style={{ ...style }}>
    <g fill="none" fillRule="nonzero" stroke="#000" strokeWidth="2">
      <circle cx="8" cy="8" r="7" />
      <path d="M1 10c2.67 2 5 1.67 7-1 3-4 2-6 5-6" />
    </g>
  </svg>
);

export default brightness;
