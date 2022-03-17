import React, { memo, useState } from "react";
import Todo from "./Todo";

const TodoList = memo((props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "a",
      isCompleted: true,
    },
    {
      id: 2,
      text: "b",
      isCompleted: true,
    },
    {
      id: 3,
      text: "c",
      isCompleted: false,
    },
  ]);
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todos.map((todo, index) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </ul>
    </section>
  );
});

export default TodoList;
