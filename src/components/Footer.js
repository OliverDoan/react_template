import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = { status: PropTypes.string, getStatus: PropTypes.func };

function Footer(status, getStatus) {
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
          <a href="#/" className="selected" onClick={() => getStatus("ALL")}>
            All
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/active"
            className="selected"
            onClick={() => getStatus("ACTIVE")}
          >
            Active
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/completed"
            className="selected"
            onClick={() => getStatus("ACTIVE")}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
