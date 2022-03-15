import React, { useState } from "react";
import { v4 } from "uuid";

const TodoFormAdd = (props) => {
  //   const [text, setText] = useState("");
  const [text, setTextInput] = useState("");
  const addTodo = props.addTodo;

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
    // console.log(e.target.value);
  };

  const addItem = (event) => {
    if (event.key === "Enter" && text) {
      addTodo({
        id: v4(),
        text,
        isCompleted: false,
      });
      setTextInput("");
    }
  };
  return (
    <>
      <div className="card-header-tab card-header">
        <input
          type="text"
          className="w-100"
          placeholder="What needs to be done? "
          //   onChange={(e) => setTextInput(e.target.value)}
          value={text}
          onChange={onTextInputChange}
          onKeyPress={addItem}
        />
      </div>
    </>
  );
};

export default TodoFormAdd;
