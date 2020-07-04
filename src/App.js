import React, { useState, useEffect } from "react";
import queryString from "query-string";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Nguyen van tai" },
    { id: 2, title: "Huynh anh hung" },
    { id: 3, title: "Nguyen Thanh Hai" },
  ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    totalRows: 10,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, [filters]);

  function hanldePageChange(newPage) {
    setFilters({ ...filters, _limit: 10, _page: newPage });
  }

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
      <Pagination pagination={pagination} onPageChange={hanldePageChange} />
    </div>
  );
}

export default App;
