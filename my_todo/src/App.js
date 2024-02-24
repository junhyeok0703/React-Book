import './App.css';
import Sketchbook from './components/Sketchbook';
import Title from './components/Title';
import TodoInput from './components/TodoInput';
import TodoInsert from './components2/TodoInsert';

import TodoTemplate from './components2/TodoTemplate';

import TodoListItem from './components2/TodoListItem';
import TodoList from './components2/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트1',
      checked: true,
    },
    {
      id: 2,
      text: '리액트2',
      checked: false,
    },
    {
      id: 3,
      text: '리액트3',
      checked: true,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
  });
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) =>
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      ),
    [todos],
  );
  return (
    <div>
      {/* <Sketchbook /> */}
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
