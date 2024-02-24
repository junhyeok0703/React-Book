import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      //이렇게 하면 정리가 안되서 타이머가 만약 안보이더라도 안죽음
      console.log("타이머 들어가는중...");
    }, 1000); //1초마다 콘솔찍힘 타이머가 맨처음 마운트되었을때 실행됨

    return () => {
      clearInterval(timer); //언마운트될떄
      console.log("타이머종료");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;
