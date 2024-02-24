import React, { useCallback, useEffect, useState } from "react";

const UseCallBackEx1 = () => {
  const [number, setNumber] = useState(0);
  //   const someFunction = () => {
  //     console.log(`someFunc: number:${number}`);
  //     return;
  //   };
  const someFunction = useCallback(() => {
    console.log(`someFunc: number:${number}`);
    return;
  }, [number]); //이때 처음 number로 멈춰있음 그래서 의존성배열에 넣어둬야함
  useEffect(() => {
    console.log(`someFun이 변경됨`);
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div>
        <button onClick={someFunction}>call somefunc</button>
      </div>
    </div>
  );
};

export default UseCallBackEx1;
