import React, { useEffect, useState } from "react";

const UseStateEx2 = () => {
  const [nameList, setNameList] = useState([
    () => {
      return [];
    },
  ]);

  const [input, setInput] = useState("");
  const onChange = (e) => {
    console.log(e.target.value);

    setInput(e.target.value);
  };

  //   const onClick = () => {
  //     const newNameList = nameList.concat(input); 이렇게 배열에 추가하고 리턴해주는방법
  //     setNameList(newNameList);
  //     setInput("");
  //   };
  const onClick = () => {
    if (input === "") {
      alert("값을 입력해주세요.");
    } else {
      setNameList((pervState) => {
        //set함수는 콜백함수에 파라미터로 이전값들을 줄수있게 된다. 그렇게하면 이전값을 복사한후에 현재input값을 넣어서 추가하여 새배열을 리턴해준다. 그렇게 되면 리렌더링이 되면서 밑에 map함수로 다시뿌려진다.
        return [...pervState, input];
      });
      setInput("");
    }
  };

  // const onClick2 =()=>{ //이게 순정 set함수
  //   setNameList((pervList)=>{
  //     return [...pervList,input];
  //   })
  // }
  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력해주세요."
        onChange={onChange}
        value={input}
      />
      <button onClick={onClick}>upload</button>
      <ul>
        {nameList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateEx2;
