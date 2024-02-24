import React, { useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
// import { ThemeContext } from "./context/ThemeContext";
//여기서 isDark필요로하지않고 중간컴포넌트이다.
const Page = () => {
  //{ isDark, setIsDark }
  //   const data = useContext(ThemeContext);
  //   console.log(data);
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
