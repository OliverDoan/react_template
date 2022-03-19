import React, { useState } from "react";
import PropTypes from "prop-types";

Header.propTypes = { addTodo: PropTypes.func };

function Header({ addTodo }) {
  const [text, setText] = useState("");
  const changeTitle = (event) => {
    setText(event.target.value);
  };

  const onAddTodo = (event) => {
    if (event.key === "Enter" && text) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={changeTitle}
        onKeyPress={onAddTodo}
      />
    </header>
  );
}

export default Header;
