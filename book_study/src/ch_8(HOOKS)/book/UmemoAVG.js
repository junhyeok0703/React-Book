import React, { useMemo, useState } from "react";
const AVGNUM = (inputlist) => {
  let sum = 0;
  console.log("계산중");
  for (let i = 0; i < inputlist.length; i++) {
    sum += inputlist[i];
  }
  return sum / inputlist.length;
};
const UmemoAVG = () => {
  const [inputvalue, setInputValue] = useState("");
  const [inputlist, setInputList] = useState([]);

  const AVG = useMemo(() => {
    AVGNUM(inputlist);
  }, [inputlist]);
  const onClick = () => {
    const newList = inputlist.concat(parseInt(inputvalue));
    setInputList(newList);
    setInputValue("");
  };
  const onChange = (e) => setInputValue(e.target.value);
  return (
    <div>
      <div>
        <input type="text" onChange={onChange} />
        <button onClick={onClick}>등록</button>
      </div>
      <ul>
        {inputlist.map((item, ind) => {
          return <li key={ind}>{item}</li>;
        })}
      </ul>
      <p>평균값: {AVG}</p>
    </div>
  );
};

export default UmemoAVG;
