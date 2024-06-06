import React from "react";

function StyleDemo() {
  return (
    <>
      <h1 style={{ color: "white", background: "black" }}>
        Style This With Inline Styling
      </h1>
      <h1 style={StyleDemo}>Style This With Style Object Variable</h1>
    </>
  );
}

export default StyleDemo;
