import React, { useState } from "react";

const EventPractice = () => {
  //   const [username, setUsername] = useState("");
  //   const [message, setMessage] = useState("");

  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form내용을 이자리에 복사하기
      [e.target.name]: e.target.value, //원하는 값을 덮어씌우기 e.target.name이 중요 이름을 가져와서? 그에 맞는 value를 삽입?하는것같음
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ":" + message);
    // setMessage("");
    // setUsername("");
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="메세지"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>버튼</button>
    </div>
  );
};

export default EventPractice;
//대충 설명하면 메세지를 입력한뒤에 엔터치면 onClick이벤트가 실행된다.
//버튼을 클릭해도 onClick 이벤트가 실행된다.
//온체인지를 따로 함수를 각자 안만들고 할수있음
