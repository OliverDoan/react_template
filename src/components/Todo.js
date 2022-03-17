import React, { memo, useState } from "react";

const Todo = memo((props) => {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>work1</label>
        <button className="destroy" />
      </div>{" "}
    </li>
  );
});

export default Todo;
