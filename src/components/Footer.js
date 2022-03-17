import React, { memo } from "react";

const Footer = memo((props) => {
  // const { setStatusFilter, activeButton, clearCompleted, numOfTodosLeft, numOfTodos } = props
  return (
    <footer className="footer">
      <span className="todo-count">
        {/* <strong>{numOfTodosLeft}</strong> */}
        <strong>1</strong>
        <span> </span>
        <span>{/* {numOfTodosLeft > 1 ? 'items' : 'item'} */}</span>
        <span>items</span>
        <span> left</span>
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            // className={`${activeButton === 'ALL' ? "selected" : ''}`}
            className="selected"
            // onClick={() => setStatusFilter('ALL')}
          >
            All
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/active"
            // className={`${activeButton === 'ACTIVE' ? "selected" : ''}`}
            className="selected"
            // onClick={() => setStatusFilter('ACTIVE')}
          >
            Active
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/completed"
            // className={`${activeButton === 'COMPLETED' ? "selected" : ''}`}
            className="selected"
            // onClick={() => setStatusFilter('COMPLETED')}
          >
            Completed
          </a>
        </li>
      </ul>
      {/* {
                numOfTodosLeft < numOfTodos && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            } */}
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
});

export default Footer;
