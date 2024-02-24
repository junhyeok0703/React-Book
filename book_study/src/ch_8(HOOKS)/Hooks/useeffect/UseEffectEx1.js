import React, { useEffect, useState } from "react";

const UseEffectEx1 = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  //...매번 렌더링될떄마다
  const handleinputChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    console.log("name 변화"); //name값이 변할떄마다
  }, [name]);

  useEffect(() => {
    console.log("count변화"); //카운터값이 변할떄마다
  }, [count]);

  useEffect(() => {
    //렌더링 될떄마다
    console.log("렌더링");
  });
  useEffect(() => {
    //처음시작할때
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleinputChange} />
      <span>{name}</span>
    </div>
  );
};

export default UseEffectEx1;
