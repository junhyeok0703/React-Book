import React from "react";
import qs from "qs";
const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, //이설정은 맨앞 문자열 맨앞의 ?를 생략함
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과값은 문자열입니다.
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트임</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요.</p>}
    </div>
  );
};

export default About;
