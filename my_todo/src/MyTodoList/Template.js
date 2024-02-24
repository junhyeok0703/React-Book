import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import TodoTitle from './TodoTitle';
import TodoInput from './TodoInput';
import styled from 'styled-components';
import TodoList from './TodoList';
import img from './ipone.png';
const Wrapper = styled.div`
  width: 400px;
  height: 700px;
  text-align: center;
  background: url(${img}) no-repeat center;
  background-size: 800px;
`;
const TemplateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
// function createBulkTodos() {
//   const arr = [];
//   for (let i = 0; i <= 2500; i++) {
//     arr.push({
//       id: i,
//       text: `할일 ${i}`,
//       check: false,
//     });
//   }
//   return arr;
// }
const Template = () => {
  const [Todoarr, setTodoList] = useState([]);
  useEffect(() => {
    let todoarr = localStorage.getItem('todolist');

    if (todoarr) {
      todoarr = JSON.parse(todoarr);
      setTodoList(todoarr);
    }
  }, []);
  const nextId = useRef(1);

  const onRemove = useCallback((id) => {
    setTodoList((Todoarr) => Todoarr.filter((todo) => todo.id !== id));
  });
  const onClick = useCallback((id) => {
    setTodoList((Todoarr) =>
      Todoarr.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo,
      ),
    );
  }, []);
  useEffect(() => {
    setTodoList((prevTodoList) => {
      saveLocal(prevTodoList);
      return prevTodoList;
    });
  }, [Todoarr]);
  const saveLocal = (todoList) => {
    localStorage.setItem('todolist', JSON.stringify(todoList));
  };

  return (
    <TemplateDiv>
      <Wrapper>
        <TodoTitle>
          <TodoInput
            nextId={nextId}
            setTodoList={setTodoList}
            Todoarr={Todoarr}
          />
        </TodoTitle>
        <TodoList Todoarr={Todoarr} onRemove={onRemove} onClick={onClick} />
      </Wrapper>
    </TemplateDiv>
  );
};

export default Template;
