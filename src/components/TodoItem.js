import React, { useState } from "react";
import TodoFormAdd from "./TodoFormAdd";

function TodoItem(props) {
  const todoItem = props.todoItem;
  const deleteItem = props.deleteItem;
  const updateTodo = props.updateTodo;

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoFormAdd edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <>
      <li
        className={`list-group-item } ${
          todoItem.isCompleted ? "completed" : ""
        }`}
      >
        <div className="todo-indicator bg-primary" />
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left mr-2">
              <div className="custom-checkbox custom-control">
                <input
                  className="custom-control-input "
                  //   id="exampleCustomCheckbox4"
                  type="checkbox"
                  checked={todoItem.isCompleted}
                />
                <label
                  className="custom-control-label"
                  htmlFor="exampleCustomCheckbox4"
                >
                  &nbsp;
                </label>
              </div>
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{todoItem.text} </div>
            </div>
            <div className="widget-content-right">
              <button className="border-0 btn-transition btn btn-outline-success">
                <i className="fa fa-pencil" />
              </button>
              <button
                className="border-0 btn-transition btn btn-outline-danger"
                onClick={() => deleteItem(todoItem.id)}
              >
                <i
                  className="fa fa-trash"
                  onClick={() => deleteItem(todoItem.id)}
                />
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
