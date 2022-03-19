import React, { useState } from "react";
import PropTypes from "prop-types";

Todo.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
  updateTodoId: PropTypes.number,
  getEditTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  markCompleted: PropTypes.func,
  filterByStatus: PropTypes.func,
  index: PropTypes.number,
};

function Todo({
  todo,
  removeTodo,
  updateTodoId,
  getIdTodoUpdate,
  updateTodo,
  markCompleted,
  index,
}) {
  const isEditing = updateTodoId === todo.id;
  console.log(updateTodoId);
  console.log(todo.id);
  const [text, setText] = useState(todo.text);

  const onChangeTitle = (event) => {
    setText(event.target.value);
  };

  const onEditTodo = () => {
    updateTodo(
      {
        ...todo,
        text,
      },
      index
    );
    getIdTodoUpdate();
  };

  if (isEditing) {
    return (
      <>
        <input
          className="edit"
          value={text}
          type="text"
          onChange={onChangeTitle}
          onBlur={onEditTodo}
          onKeyPress={(e) => {
            if (e.key === "Enter" && text) {
              onEditTodo();
            }
          }}
        />
      </>
    );
  } else {
    return (
      <li className={` ${todo.isCompleted ? "completed" : ""}`}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => markCompleted(todo.id)}
          />
          {/* <input type="text" value={todo.text} /> */}
          <label onDoubleClick={() => getIdTodoUpdate(todo.id)}>
            {todo.text}
          </label>
          <button className="destroy" onClick={() => removeTodo(todo.id)} />
        </div>
      </li>
    );
  }
}

export default Todo;
