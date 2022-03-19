import React, { useState } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

TodoList.propTypes = {};

function TodoList(props) {
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
  const [updateTodoId, setUpdateTodoId] = useState("");
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
  return (
    <>
      <Header addTodo={addTodo} />
      <section className="main">
        <ul className="todo-list">
          {todos.map((todo, index) => {
            return (
              <Todo
                todo={todo}
                index={index}
                key={todo.id}
                removeTodo={removeTodo}
                updateTodoId={updateTodoId}
                getIdTodoUpdate={getIdTodoUpdate}
                updateTodo={updateTodo}
                markCompleted={markCompleted}
              />
            );
          })}
        </ul>
      </section>
      <Footer status={status} getStatus={getStatus} />
    </>
  );
}

export default TodoList;
