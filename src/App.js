import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./reduxStore/slice/userSlice";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import UsersTable from "./component/UsersTable";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <div className="app-div">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <h2>Users List</h2>
        <UsersTable users={users} />
      </div>
    </div>
  );
}

export default App;
