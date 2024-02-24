import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const router = useNavigate();
  const handlerouter = () => {
    router("/router");
  };
  return (
    <div>
      <H1>리액트에 다양한 실습을 여기다가 써볼게</H1>
      <div className="btns">
        <button>
          <Linked to="/hooks">Hook</Linked>
        </button>
        <button onClick={handlerouter}>react-router-dom</button>
        <Link to="/sasscomponent">ㅎㅇ</Link>
      </div>
    </div>
  );
};

export default Home;

export const H1 = styled.h1`
  text-align: center;
`;
export const Linked = styled(Link)`
  text-decoration: none;
  color: black;
`;
