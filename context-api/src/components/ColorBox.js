import React from "react";
import Colorcontext from "../contexts/color";

const ColorBox = () => {
  return (
    <Colorcontext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </Colorcontext.Consumer>
  );
};

export default ColorBox;
