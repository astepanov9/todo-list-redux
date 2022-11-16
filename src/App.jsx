import React from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import TodoList from './components/TodoList';
import Search from './components/Search';
import { addTodo } from './redux/slice/todoSlice';

function App() {
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();

  const onClickAdd = () => {
    if (inputValue.length) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h1>Todo list redux</h1>
      <div className="input-box">
        <Search inputValue={inputValue} setInputValue={setInputValue} addTodo={onClickAdd} />
      </div>
      <div className="todo-list">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
