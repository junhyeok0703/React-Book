import React, { useEffect, useState } from "react";

const UseE = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링완료");
    console.log({ name, nickname });
  }, [nickname]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>이름 : {name}</div>
        <div>닉네임 : {nickname}</div>
      </div>
    </div>
  );
};

export default UseE;
