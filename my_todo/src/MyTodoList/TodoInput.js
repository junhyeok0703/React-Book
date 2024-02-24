import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegPlusSquare } from 'react-icons/fa';

const Input = styled.input`
  width: 200px;
  height: 20px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
  font-size: 20px;
  margin-right: 10px;
  &:focus {
    border-color: #4caf50;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoInput = ({ nextId, Todoarr, setTodoList }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    if (text.trim() !== '') {
      setTodoList((Todoarr) => [
        ...Todoarr,
        {
          id: nextId.current,
          text: text,
          check: false,
        },
      ]);
      nextId.current += 1;
      setText('');
    } else {
      alert('입력해주세요!');
    }
  };

  return (
    <InputWrapper>
      <IconWrapper>
        <Input
          value={text}
          type="text"
          placeholder="할 일을 입력하세요"
          onChange={onChange}
        />
        <FaRegPlusSquare onClick={onClick} />
      </IconWrapper>
    </InputWrapper>
  );
};

export default TodoInput;
