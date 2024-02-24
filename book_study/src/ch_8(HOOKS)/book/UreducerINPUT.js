import React, { useReducer } from "react";
const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};
const Inputreducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input value={name} name="name" onChange={onChange} />
        <input value={nickname} name="nickname" onChange={onChange} />
      </div>
      <p>이름 : {name}</p>
      <p>닉네임 : {nickname}</p>
    </div>
  );
};

export default Inputreducer;
