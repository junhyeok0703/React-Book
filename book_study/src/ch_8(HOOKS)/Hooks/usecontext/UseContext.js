import React from "react";
import { Wrapper } from "../usestate/UseShome";
import { Link, Outlet } from "react-router-dom";
/*
app이 더 커질수록 컴포넌트들의 깊이가 깊어질수록 state를 props로 넘겨줄일이 많아서 하위컴포넌트까지 되게 오래걸리고 복잡하게 된다.
전역적인 변수들이 있을수도있다. 현재로그인된user정보 ,테마 ,언어등
프롬스로 단계별로 전달하면 너무 복잡해진다. 
context라는건 전역적인변수들을 여러컴포넌트들에게 쉽게 전달할수있는 역할을한다.!

최상위컴포넌트에서 state를 props로 하위컴포넌트들에게 전달하고 상위컴포넌트들은  또 전달하여 더 낮은 하위컴포넌트들에게 전달하는것을 
prop drilling이라고한다.
중간컴포넌트는 필요하지않은 데이터라도 전달해주기위해 거쳐가야함.

useContext는 context에서 데이터 필요한 사람~ 하면 useContext로
나필요해~ 하는거다. 
그럼 prop가 필요없나? 그것은 아니다. 
그러니까 context는 꼭필요할때만 사용해야되기 떄문이다.
그러면 context에 많은 state들을 넣게되면 존속성이 커져서 컴포넌트 재활용이 어려워진다.

다양한 레벨에 있는 많은 컴포넌트들에게 전역적인 데이터를 전달하기 위함이다.
오직 prop drilling을 피하기 위한 목적이라면 컴포넌트합성이 더 좋은 해결책일수도있다고 이야기합니다.
*/
const UseContext = () => {
  return (
    <>
      <Wrapper>useContext를 배우자</Wrapper>
      <nav>
        <Link to="ex1">예시1</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default UseContext;
