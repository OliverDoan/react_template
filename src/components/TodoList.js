import React, { useState } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

TodoList.propTypes = {};

function TodoList(props) {
  const { todos } = props;

  return (
    <>
      <section className="main">
        <ul className="todo-list">
          {todos.map((todo, index) => {
            return <Todo todo={todo} index={index} key={todo.id} {...props} />;
          })}
        </ul>
      </section>
    </>
  );
}

export default TodoList;
