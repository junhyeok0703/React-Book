import React, { useMemo, useState } from "react";
const HandCalculate = (Num) => {
  console.log("어려운 계산중...");
  for (let i = 0; i < 99999999; i++) {}
  return Num + 10000;
};
const EasyCalculate = (Num) => {
  console.log("쉬운 계산중...");
  return Num + 1;
};
const UseMemoEx1 = () => {
  const [hardNum, setHardNum] = useState(0);
  const [easyNum, setEasyNum] = useState(0);

  const hardSum = useMemo(() => {
    return HandCalculate(hardNum);
  }, [hardNum]);
  const easySum = EasyCalculate(easyNum); //쉬운계산을해도 hardsum도 다시계산하게됨 ㅇㅅㅇ..
  //hardSum은 그대로인데도 다시 계산을해서 반환하니까 hardSum을 useMemo로할수있다.
  return (
    <div>
      <h1>어려운 계산기</h1>
      <input
        type="number"
        value={hardNum}
        onChange={(e) => setHardNum(parseInt(e.target.value))}
      />
      <span>+ 10000 = {hardSum}</span>
      <h1>쉬운 계산기</h1>
      <input
        type="number"
        value={easyNum}
        onChange={(e) => setEasyNum(parseInt(e.target.value))}
      />
      <span>+ 1 = {easySum}</span>
    </div>
  );
};

export default UseMemoEx1;
