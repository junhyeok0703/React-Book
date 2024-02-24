import React, { useRef, useState } from "react";
/* useRef는 객체형태이고 그안에 current라는 변수가 선언되어있다.

이코드를 보면 리렌더링하면 변수는 0으로 초기화되고
state는 변화될떄마다 재렌더링됨
ref는 변화될때마다 재렌더링이 되지않음
둘다 날라가지않음 값들이

그래서 재렌더링되면 ref도 렌더링되고 ref값을 올렸을때는 재렌더링이 일어나지않는다. state는 값을 올렸을때 재렌더링이 일어나서 ref값이 보이게 된다.
변화가있는것들은 렌더링이 일어날때만 화면에 보임
 */
const UseRefEx1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let newnum = 0;
  console.log(countRef);
  const handlecountstateUp = () => {
    setCount(count + 1);
  };
  const handlecountrefUP = () => {
    countRef.current += 1;
  };
  const handlenum = () => {
    newnum++;
    console.log(newnum);
  };
  return (
    <div>
      <span>state: {count}</span>
      <p>ref:{countRef.current}</p>
      <p>변수:{newnum}</p>
      <button onClick={handlecountstateUp}>state올려</button>
      <button onClick={handlecountrefUP}>ref올려</button>
      <button onClick={handlenum}>변수올려</button>
    </div>
  );
};

export default UseRefEx1;
