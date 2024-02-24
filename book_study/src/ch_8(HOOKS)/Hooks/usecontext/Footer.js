import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Footer = () => {
  //{ isDark, setIsDark }
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <button className="button" onClick={() => setIsDark(!isDark)}>
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
