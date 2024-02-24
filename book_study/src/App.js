// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hooks from "./ch_8(HOOKS)/Hooks/Hooks";
import RouterComponent from "./Router/Router";
import UseShome from "./ch_8(HOOKS)/Hooks/usestate/UseShome";
import UseStateEx2 from "./ch_8(HOOKS)/Hooks/usestate/UseStateEx2";
import UseStateEx1 from "./ch_8(HOOKS)/Hooks/usestate/UseStateEx1";
import UseEffectHome from "./ch_8(HOOKS)/Hooks/useeffect/UseEffectHome";
import UseEffectEx2 from "./ch_8(HOOKS)/Hooks/useeffect/UseEffectEx2";
import UseEffectEx1 from "./ch_8(HOOKS)/Hooks/useeffect/UseEffectEx1";
import UseRef from "./ch_8(HOOKS)/Hooks/useref/UseRef";
import UseRefEx1 from "./ch_8(HOOKS)/Hooks/useref/UseRefEx1";
import UseRefEx2 from "./ch_8(HOOKS)/Hooks/useref/UseRefEx2";
import UseRefEx3 from "./ch_8(HOOKS)/Hooks/useref/UseRefEx3";
import UseContext from "./ch_8(HOOKS)/Hooks/usecontext/UseContext";
import UseContextEx1 from "./ch_8(HOOKS)/Hooks/usecontext/UseContextEx1";
import "./App.css";
import UseMemo from "./ch_8(HOOKS)/Hooks/useMemo/UseMemo";
import UseMemoEx1 from "./ch_8(HOOKS)/Hooks/useMemo/UseMemoEx1";
import UseMemoEx2 from "./ch_8(HOOKS)/Hooks/useMemo/UseMemoEx2";
import UseCallBack from "./ch_8(HOOKS)/Hooks/usecallback/UseCallBack";
import UseCallBackEx1 from "./ch_8(HOOKS)/Hooks/usecallback/UseCallBackEx1";
import UseCallBackEx2 from "./ch_8(HOOKS)/Hooks/usecallback/UseCallBackEx2";
import UmemoAVG from "./ch_8(HOOKS)/book/UmemoAVG";
import SassComponent from "./ch_9(css)/SassComponent";
import StyledComponent from "./ch_9(css)/StyledComponent";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/router" element={<RouterComponent />} />
        <Route path="/hooks/usestate" element={<UseShome />} />
        <Route path="/hooks/usestate/ex2" element={<UseStateEx2 />} />
        <Route path="/hooks/usestate/ex1" element={<UseStateEx1 />} />
        <Route path="/hooks/useeffect" element={<UseEffectHome />} />
        <Route path="/hooks/useeffect/ex2" element={<UseEffectEx2 />} />
        <Route path="/hooks/useeffect/ex1" element={<UseEffectEx1 />} />
        <Route path="/hooks/useref" element={<UseRef />} />
        <Route path="/hooks/useref/ex1" element={<UseRefEx1 />} />
        <Route path="/hooks/useref/ex2" element={<UseRefEx2 />} />
        <Route path="/hooks/useref/ex3" element={<UseRefEx3 />} />
        <Route path="/hooks/usecontext" element={<UseContext />} />
        <Route path="/hooks/usecontext/ex1" element={<UseContextEx1 />} />
        <Route path="/hooks/usememo" element={<UseMemo />} />
        <Route path="/hooks/usememo/ex1" element={<UseMemoEx1 />} />
        <Route path="/hooks/usememo/ex2" element={<UseMemoEx2 />} />
        <Route path="/hooks/usecallback" element={<UseCallBack />} />
        <Route path="/hooks/usecallback/ex1" element={<UseCallBackEx1 />} />
        <Route path="/hooks/usecallback/ex2" element={<UseCallBackEx2 />} />
        <Route path="/usememo" element={<UmemoAVG />} />
        <Route path="/sasscomponent" element={<SassComponent />} />
        <Route path="/styledcomponent" element={<StyledComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
