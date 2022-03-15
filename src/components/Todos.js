import React, { useState } from "react";
import TodoFormAdd from "./TodoFormAdd";
import TodoItem from "./TodoItem";
const Todos = () => {
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
  const addTodo = (todo) => {
    const newToDoList = [...todos, todo];
    setTodos(newToDoList);
  };

  const deleteItem = (id) => {
    const newToDoList = todos.filter((item) => item.id !== id);
    setTodos(newToDoList);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <>
      {" "}
      <div className="row d-flex justify-content-center container">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <TodoFormAdd addTodo={addTodo} />
            <div className="scroll-area-sm">
              <perfect-scrollbar className="ps-show-limits">
                <div style={{ position: "static" }} className="ps ps--active-y">
                  <div className="ps-content">
                    <ul className=" list-group list-group-flush">
                      {todos.map((todoItem, index) => {
                        return (
                          <TodoItem
                            todoItem={todoItem}
                            index={index}
                            key={todoItem.id}
                            deleteItem={deleteItem}
                            updateTodo={updateTodo}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </perfect-scrollbar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
