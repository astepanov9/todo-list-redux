import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoCompleted } from '../redux/slice/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="todo-list-box">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodoCompleted(id))}
        />
        <span className="text">{text}</span>
      </div>
      <span className="delete" onClick={() => dispatch(deleteTodo(id))}>
        ✕
      </span>
    </li>
  );
};

export default TodoItem;
