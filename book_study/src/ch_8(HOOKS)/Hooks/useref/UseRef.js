import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Wrapper } from "../usestate/UseShome";
//useRef
//state변화는 렌더링이 꼭된다. 컴포넌트 내부 변수들 초기화가된다.
//ref의 변화는 렌더링이 되지않는다. 변수들의 값이 유지가된다.
//불필요한 렌더링을 막음
//state의 변화가 있을때 렌더링이될떄 ref는 값이 유지된다.
/*즉  일반변수는 렌더링될때마다 값초기화됨
state변화가 있을떄 ref는 값이 유지가된다.
ref의 값의 변화는 렌더링이 다시 되지않는다.
전역변수맹킨가?..
변화시 값을 유지해야될떄 편리하다.
무분별한 렌더링을 막아준다.

ref로 dom요소에 접근할수있다.
ex) 로그인창이 띄어졌을때 자동적으로 아이디입력창이 focus된다.
그럴때쓰는거임 
documentqueryseletor랑 비슷함
*/

const UseRef = () => {
  return (
    <>
      <Wrapper>useRef를 배우자</Wrapper>
      <nav>
        <Link to="ex1">예시1(ref로 변수컨트롤)</Link>
        <Link to="ex2">예시2(ref로 변수컨트롤)</Link>
        <Link to="ex3">예시3(ref로 dom요소접근)</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default UseRef;
