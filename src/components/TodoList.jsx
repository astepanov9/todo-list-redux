import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = () => {
  const isRender = React.useRef(false);
  const todos = useSelector((store) => store.todoSlice.todos);

  React.useEffect(() => {
    if (isRender.current) {
      const json = JSON.stringify(todos);
      localStorage.setItem('todoList', json);
    }
    isRender.current = true;
  }, [todos]);

  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ol>
  );
};

export default TodoList;
