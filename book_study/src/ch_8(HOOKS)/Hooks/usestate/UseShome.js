import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const UseShome = () => {
  return (
    <>
      <Wrapper>useState를 배우자</Wrapper>
      <nav>
        <Link to="ex1">예시1</Link>
        <Link to="ex2">예시2</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export const Wrapper = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 20px;
`;

export default UseShome;
