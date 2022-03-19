import "./App.css";
import TodoList from "./components/TodoList";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "HTMl/CSS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "JavaScript",
      isCompleted: true,
    },
    {
      id: 3,
      text: "ReactJS",
      isCompleted: false,
    },
  ]);
  const filterByStatus = (todos, status, id) => {
    switch (status) {
      case "ACTIVE":
        return todos.filter((item) => !item.isCompleted);
      case "COMPLETED":
        return todos.filter((item) => item.isCompleted);
      case "REMOVE":
        return todos.filter((item) => item.id !== id);
      default:
        return todos;
    }
  };
  const [updateTodoId, setUpdateTodoId] = useState();
  const [status, setStatus] = useState("ALL");

  const addTodo = (text) => {
    const newToDoList = [
      ...todos,
      {
        id: new Date().valueOf(),
        text,
        completed: false,
      },
    ];
    setTodos(newToDoList);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const getIdTodoUpdate = (id) => {
    setUpdateTodoId(id);
  };

  const getStatus = (status) => {
    setStatus(status);
  };
  const updateTodo = (todo, index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, todo);
    setTodos(newTodos);

    // setUpdateTodoId("");
  };

  const markCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });

    setTodos(newTodos);
  };

  const clearCompleted = (e) => {
    setTodos(filterByStatus(todos, "ACTIVE"));
  };

  return (
    <div className="todoapp">
      <Header addTodo={addTodo} />
      <TodoList
        todos={filterByStatus(todos, status)}
        markCompleted={markCompleted}
        updateTodo={updateTodo}
        getIdTodoUpdate={getIdTodoUpdate}
        removeTodo={removeTodo}
        updateTodoId={updateTodoId}
      />
      <Footer
        status={status}
        getStatus={getStatus}
        setStatusFilter={(status) => setStatus({ status })}
        clearCompleted={clearCompleted}
        numOfTodosLeft={filterByStatus(todos, "ACTIVE").length}
        numOfTodos={todos.length}
      />
    </div>
  );
}

export default App;
