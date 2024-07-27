import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(sessionStorage.getItem('todos')) || [
    { id: 1, text: "Pravin's task", completed: true },
  ];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      sessionStorage.setItem('todos', JSON.stringify(state));
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const index = state.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state[index].text = text;
        sessionStorage.setItem('todos', JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const newState = state.filter(todo => todo.id !== action.payload);
      sessionStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
        sessionStorage.setItem('todos', JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, editTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
