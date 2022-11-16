import React from 'react';

const Search = ({ inputValue, setInputValue, addTodo }) => {
  return (
    <label>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
      <button onClick={addTodo}>Add todo</button>
    </label>
  );
};

export default Search;
