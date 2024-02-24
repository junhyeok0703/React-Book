import React, { useState } from "react";
import { Wrapper } from "../usestate/UseShome";
import { Link, Outlet } from "react-router-dom";

//useEffect를 배울것이다
/*인자로 콜백함수를 받는다.
콜백함수란? 다른함수의 인자로 전달된 함수를 의미 -> 함수의 파라미터로 받는 함수 
ex) 
함수이름(()=>{
이런식으로 파라미터로 콜백함수를 받은것이다. 호출시에
})
함수안에 원하는 작업을 할수있다.
case1
인자로 콜백함수만 받을때 
-> 렌더링될때마다 실행된다.
case2
인자로 콜백함수와 배열를 받을떄 (빈배열과 값이 들어있는배열)
1.빈배열은 처음렌더링이 될때 실행
2.값이 들어있는배열이면 처음렌더링될때 실행 + 값이 바뀔때 실행

언마운트작업은 clean up이라는 정리작업을 함
useEffect (()=>{
return () =>{
    언마운트 (ex:구독해지)
}
},[])

*/
const UseEffectHome = () => {
  return (
    <>
      <Wrapper>useEffect를 배우자</Wrapper>
      <nav>
        <Link to="ex1">예시1</Link>
        <Link to="ex2">예시2</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default UseEffectHome;
