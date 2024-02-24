import React, { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

const UseContextEx1 = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {/* <Page isDark={isDark} setIsDark={setIsDark} /> */}
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default UseContextEx1;
