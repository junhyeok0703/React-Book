import React, { useCallback } from 'react';

import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import { List } from 'react-virtualized';
const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
  max-height: 490px;
  overflow-y: auto;
  width: 81%;
  border-radius: 20px;
  margin-left: 38px;
`;

const TodoList = ({ Todoarr, onRemove, onClick }) => {
  const todos = Array.isArray(Todoarr) ? Todoarr : [];
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = Todoarr[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onClick={onClick}
          style={style}
        />
      );
    },
    [onRemove, onClick, Todoarr],
  );

  return (
    <TodoListWrapper>
      <List
        className="TodoList"
        width={322}
        height={504}
        rowCount={Todoarr.length}
        rowHeight={63}
        rowRenderer={rowRenderer}
        list={Todoarr}
        style={{ outline: 'none' }}
      />
    </TodoListWrapper>
  );
};

export default React.memo(TodoList);
