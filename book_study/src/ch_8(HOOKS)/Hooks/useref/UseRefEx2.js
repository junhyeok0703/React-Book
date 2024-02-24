import React, { useEffect, useRef, useState } from "react";
//변화는받아들이지만 렌더링되면되지않을떄 사용!
const UseRefEx2 = () => {
  const [count, setCount] = useState(0);
  //만약 내가 렌더링 횟수를 세고싶다. 카운터누를때마다!
  //그러면 state하나 선언해서 useEffect는 렌더링될떄마다 불러주게되니까
  //저기다가 setstate하면되지않을까?
  const redercnt2 = useRef(0);

  const [redercnt1, setRedercnt1] = useState(0);
  useEffect(() => {
    //setRedercnt(redercnt1+1);
    redercnt2.current = redercnt2.current + 1;
    //이렇게 되면 렌더링될때마다 set을 부르게되니까 또 useEffect가 실행되서 결국엔 무한루프에 빠진다. ref쓰면 ㄱㅊ음
    console.log("렌더링", redercnt2.current);
  });
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
};

export default UseRefEx2;
