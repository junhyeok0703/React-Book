import React, { useCallback, useState } from "react";
import Box from "./Box";

const UseCallBackEx2 = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);
  //   const createBoxStyle = () => {
  //     return {
  //       backgroundColor: "pink",
  //       width: `${size}px`,
  //       height: `${size}px`,
  //     };
  //   };

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);
  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};

export default UseCallBackEx2;
