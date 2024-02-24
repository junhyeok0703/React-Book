import React from "react";
import { H1 } from "../../Home";
import { Link } from "react-router-dom";

const Hooks = () => {
  return (
    <div>
      <H1>여기서는 Hooks를 배울꺼야</H1>

      <Link to="/hooks/usestate">useState</Link>
      <Link to="/hooks/useeffect">useEffect</Link>
      <Link to="/hooks/useref">useRef</Link>
      <Link to="/hooks/usecontext">useContext</Link>
      <Link to="/hooks/usememo">useMemo</Link>
    </div>
  );
};

export default Hooks;
