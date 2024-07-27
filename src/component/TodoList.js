import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editTodo,
  deleteTodo,
  toggleTodo,
} from "../reduxStore/slice/todoSlice";
import "./common.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    dispatch(
      editTodo({
        id,
        text: editText,
      })
    );
    setEditId(null);
  };

  return (
    <ol type="1">
      {todos.map((todo,ind) => (

        <li key={todo.id} className="list-row">
            <span>{ind+1}.</span>
          <input
            type="checkbox"
            className="todo-checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {editId === todo.id ? (
            <>
              <input
                type="text"
                className="edit-todo"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <span
                className="todo-list-text"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleEdit(todo.id, todo.text)}>
                Edit
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
