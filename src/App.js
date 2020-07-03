import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Nguyen van tai" },
    { id: 2, title: "Huynh anh hung" },
    { id: 3, title: "Nguyen Thanh Hai" },
  ]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, []);
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
      <h1>Post List</h1>
      <PostList posts={postList} />
    </div>
  );
}

export default App;
