import { createSlice } from '@reduxjs/toolkit';

const getTodoFromLocalStorage = () => {
  const data = localStorage.getItem('todoList');
  const items = data ? JSON.parse(data) : [];

  return items;
};

const initialState = {
  todos: getTodoFromLocalStorage(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompleted(state, action) {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;
