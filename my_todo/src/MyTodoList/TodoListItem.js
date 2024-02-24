import React from 'react';
import { FaCheckSquare, FaRegCheckSquare, FaRegTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Added to evenly distribute content */
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  transition: background-color 0.3s;
  width: 300px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const IconWrapper = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  width: 100%;
  text-align: center; /* Center the text */
  text-decoration: ${(props) => (props.check ? 'line-through' : 'none')};
  color: ${(props) => (props.check ? '#888' : '#333')};
  font-size: 16px;
`;

const TrashIcon = styled(FaRegTrashAlt)`
  font-size: 24px;
  cursor: pointer;
  color: #ff3333;
`;

const TodoListItem = ({ todo, onRemove, onClick }) => {
  const { id, text, check } = todo;

  return (
    <ItemWrapper>
      <IconWrapper onClick={() => onClick(id)}>
        {check === true ? <FaCheckSquare /> : <FaRegCheckSquare />}
      </IconWrapper>
      <TextWrapper check={check}>{text}</TextWrapper>
      <TrashIcon onClick={() => onRemove(id)} />
    </ItemWrapper>
  );
};

export default React.memo(TodoListItem);
