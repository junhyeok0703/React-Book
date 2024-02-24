import React, { useEffect, useMemo, useState } from "react";

/*
원시타입과 객체타입이 있다.
원시타입은 그냥 변수상자에 한방에 들어감
객체타입은 변수를 하나더 만들어서 객체는 그 주소값을 참조하기떄문이다. */
const UseMemoEx2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  //   const location = isKorea ? "한국" : "외국";
  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   };//객체로 되면 유즈임펙트가 둘다 실행이됨

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);
  useEffect(() => {
    console.log("useEf 호출");
  }, [location]); //여기서 렌더링이 되었을때 로컬은 객체는 다시 주소값을 가지게 되는데 로컬변수는 주소값을 참조하는 변수라서 일반 원시타입변수에서는 이제 안바뀌었다고하는데 안눌렸을때도 근데 주솟값이 바뀐 객체타입을참조하는변수는 바뀌었다고 판단해서 useEffect가 호출이 됨.

  //결론 원래 number변해도 useEffect은 변하면 안됨.
  //근데 로컬변수가 원시타입이 아닌 객체타입을 참조하는 순간 리렌더링될떄 객체의 주소값이 변해서 로컬변수도 변하게 됨. 그래서 변했다고 생각하여 실질적으로 안에있는 값은 변하지않았지만 주소값이 변해서 useEffect이 호출이 됨. 이럴떄 useMemo를 사용한다!

  return (
    <div>
      <h2>하루에 몇끼 먹으셈?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느나라임?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타기</button>
    </div>
  );
};

export default UseMemoEx2;
