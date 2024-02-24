import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Wrapper } from "../usestate/UseShome";
/*이것 또한 컴포넌트 최적화를 위해사용한다.
저번에 useMemo는
const 자주쓰는값을저장하는변수 = useMemo(()=>{
    return 함수이름!
},[의존성배열 이값이 변하면 다시 계산할게]) <-이거였다면
const useCallback (()=>{

},[])
(()=>{

},[])이 자체를 반환해줌


일단 함수 컴포넌트는 함수이다. 그래서 상태가 변할때마다 리렌더링되고
변수들은 모두 초기화가 된다.
우리가 화살표함수를 만들때 사실 변수에다가 함수객체를 참조하는것이다.
함수는 객체이다. 메모리에다가 올려두고 변수가 주소값을 참조해서 쓰게 된다.
리렌더링이 될떄 주소값이 바뀐다. 함수를 새로불렀으니까? 주소값이 바뀌어 결국
함수는 바뀌게되서
useEffect를 사용해서 확인하면 함수를 의존성배열에다가 넣고 하면 그함수가 변할떄마다 useEffect가 호출이 되는데 주소값이 변하기에 변수는 변하고 유즈인펙은 계속 재호출이 되게 된다.
 */
const UseCallBack = () => {
  return (
    <>
      <Wrapper>useCallback를 배우자</Wrapper>
      <nav>
        <Link to="ex1">예시1</Link>
        <Link to="ex2">예시2</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default UseCallBack;
