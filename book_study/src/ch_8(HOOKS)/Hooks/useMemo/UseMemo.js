import React from "react";
import { Wrapper } from "../usestate/UseShome";
import { Link, Outlet } from "react-router-dom";
/*
useMemo에서 memo는 메모이제이션을 뜻함
동일한 값을 리턴한 함수가 있다면 반복적으로 호출해야된다면 
맨처음 함수를 불렀을때 메모리에 저장해뒀다가 다시함수를 불렀을때 저장해둔값을쓰는것이다.(재사용)
자주필요한값을 맨처음 계산했을때 그값을 캐싱해뒀다가 필요할때마다 다시 계산하는게 아니라 가져다가 쓴다.

함수형 컴포넌트는 함수라서 렌더링될때마다 호출이 된다.
호출될때마다 모든 내부 변수가 초기화가 된다.

어떤 함수를 생각했을때 10을 반환해주는 함수가 있다고 가정하면 컴포넌트에서 
호출되서 변수에 저장되서 함수를 호출해 계산하여 반환해 변수에 저장할것이다.
그리고 재렌더링이 되는 구문이 나온다면 또 계산하여 반환해 변수에 저장할것이다.
그렇지않고 계산효율성을 높이기위해 계산하는 함수가 있다면 다시계산하지않고 useMemo를 이용하여 캐싱해두는것이다.
사용법
useMemo는 두개의 인자를받는다. useEffect랑비슷하다
콜백함수하라나랑 배열하나랑
item이라는 값이 업데이트될때만 함수를 재호출한다.(의존성배열이라고한다.)
그전까지 콜백함수에 있는 값으로 저장해뒀다가 값을 계산하지않고 반환

const value = useMemo(()=>{
계산함수 
},[item])
불필요한값은 사용하지말자 캐싱하는것도 메모리낭비
*/
const UseMemo = () => {
  return (
    <>
      <Wrapper>useMemo를 배우자</Wrapper>
      <nav>
        <Link to="ex1">예시1(음 값을 변할떄?)</Link>
        <Link to="ex2">예시2</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default UseMemo;
