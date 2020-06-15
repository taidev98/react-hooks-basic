import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Nguyen van tai" },
    { id: 2, title: "Huynh anh hung" },
    { id: 3, title: "Nguyen Thanh Hai" },
  ]);
  const handleTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };
  const handleTodoSubmit = (formValues) => {
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, title: formValues.title },
    ]);
    console.log(todoList);
  };
  return (
    <div className="App">
      <h1>Use State</h1>
      <TodoForm onTodoSubmit={handleTodoSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
