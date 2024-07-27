import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/todoSlice';
import userReducer from '../slice/userSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
  },
});
