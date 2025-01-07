import React from "react";

interface P {
  height: number; // Use `number` instead of `Number` for TypeScript type.
}

function SizedBox({ height }: P) {
  return <div style={{ height: `${height}px` }} />;
}

export default SizedBox;
