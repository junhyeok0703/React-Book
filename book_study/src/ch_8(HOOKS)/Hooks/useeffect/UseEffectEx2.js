import React, { useState } from "react";
import Timer from "./Timer";

const UseEffectEx2 = () => {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>toggle timer</button>
    </div>
  );
};

export default UseEffectEx2;
