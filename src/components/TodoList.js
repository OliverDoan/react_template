import React, { memo } from "react";
import Todo from "./Todo";

const TodoList = memo((props) => {
  // const { listTodos, checkAll, isCheckedAll } = props
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        // onChange={() => {
        //     console.log('mmark done')
        //     checkAll()
        // }}
        // checked={isCheckedAll}
      />
      <label
        htmlFor="toggle-all"
        // onClick={checkAll}
      ></label>
      <ul className="todo-list">
        <Todo />
      </ul>
    </section>
  );
});

export default TodoList;
