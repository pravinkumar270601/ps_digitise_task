import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../reduxStore/slice/todoSlice';
import "./common.css"

const AddTodo = () => {
    const [text, setText] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
      dispatch(addTodo({
        id: newId,
        text,
        completed: false
      }));
      setText('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
        className="addlist-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit" className='add-todo-btn'>Add</button>
      </form>
    );
  };
  

export default AddTodo;
