import React, { useState } from "react";

//useState에 대해 알아보자
/* 
useState란 컴포넌트의 상태라고 이야기한다.
useState는 배열에 상태변수하나 , 상태를변경해주는함수하나를 받을수있다.
그리고 초기값을 useState(초기값)을 지정해줄수있다.
const [state,setState] = useState(0); <- 이런식으로 말이다.
setState로 상태롤 변경하면 해당컴포넌트는 상태를 업데이트하여서 다시 렌더링이 된다. 일반변수는 리렌더링이 안됨.
*/
const UseStateEx1 = ({ exampleNum }) => {
  const [time, setTime] = useState(1);
  const onClick = () => {
    //버튼 클릭시 time이라는 상태가 1씩 + 되고 newTime변수에 값이 초기화됨 12이 넘어가면 다시 1로 변하고 time이라는 상태에 값이 업뎃된다.(리렌더링)
    // 하지만 12가 아닐시에는 상태+1을 일반변수에 넣어서 setTime으로 값을 업데하게되고 렌더링한다.
    // 순서를 보면 함수먼저 set불리게되면 리렌더링이 되게되는데 렌더링 -> set -> 렌더링이런순이라서 우리는 업뎃한값을 볼수있다.
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  console.log("업데이트");
  return (
    <div>
      <h1>예시 {exampleNum}</h1>
      <span>현재 시간 : {time}시</span>
      <button onClick={onClick}>update</button>
    </div>
  );
};

export default UseStateEx1;
