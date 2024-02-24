import React, { useEffect, useRef, useState } from "react";
//ref로 dom요소 접근
/*input요소에 입력할수있는상태가 focus되었다라고 한다.
자동focus를 하려면 dom요소에 직접적인 접근이 가능해야한다.
ref={inputRef}이런식으로 하면input dom요소가 그냥 들어가벌힘..
개미쳤네
거기다가 유지임펙으로 처음시작할때 focus()라는 dom요소의 함수를 실행하게 되면 그냥 포커스되벌힘..
 */
const UseRefEx3 = () => {
  const inputRef = useRef();

  const viewAlert = () => {
    alert(`${inputRef.current.value}님 환영합니다!`);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="아이디" />
      <button onClick={viewAlert}>로그인</button>
    </div>
  );
};

export default UseRefEx3;
