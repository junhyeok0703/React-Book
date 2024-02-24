import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TodoTitleWrapper = styled.div`
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-family: 'Arial', sans-serif;
  color: #333;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const DayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const DateBox = styled.div`
  border-bottom: 3px solid pink;
  padding: 0 10px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TodoTitle = ({ children }) => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <TodoTitleWrapper>
      <Title>My Todo List</Title>
      <DayWrapper>
        <DateBox>{formattedDate}</DateBox>
      </DayWrapper>
      <div>{children}</div>
    </TodoTitleWrapper>
  );
};

export default TodoTitle;
