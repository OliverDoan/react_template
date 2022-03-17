import React, { memo } from "react";

const Footer = memo((props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <span></span>
        <li>
          <a href="#/active" className="selected">
            Active
          </a>
        </li>
        <span></span>
        <li>
          <a href="#/completed" className="selected">
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
});

export default Footer;
