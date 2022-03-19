import PropTypes from "prop-types";
import React from "react";
import Filter from "./Filter";

Footer.propTypes = {
  status: PropTypes.string,
  getStatus: PropTypes.func,
  clearCompleted: PropTypes.func,
  numOfTodosLeft: PropTypes.number,
  numOfTodos: PropTypes.number,
};

function Footer({
  status,
  getStatus,
  numOfTodosLeft,
  numOfTodos,
  clearCompleted,
}) {
  const filterBtns = [
    {
      id: 1,
      title: "All",
      isActive: status === "ALL",
      onClick: () => getStatus("ALL"),
      link: "",
    },
    {
      id: 2,
      title: "Active",
      isActive: status === "ACTIVE",
      onClick: (e) => {
        // e.preventDefault();
        getStatus("ACTIVE");
      },
      link: "active",
    },
    {
      id: 3,
      title: "Completed",
      isActive: status === "COMPLETED",
      onClick: (e) => {
        // e.preventDefault();
        getStatus("COMPLETED");
      },
      link: "completed",
    },
  ];
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numOfTodosLeft}</strong>
        <span> </span>
        <span>{numOfTodosLeft > 1 ? "items" : "item"}</span>
        <span> left</span>
      </span>
      <ul className="filters">
        {filterBtns.map((item) => (
          <Filter key={item.id} {...item} />
        ))}
      </ul>
      {numOfTodosLeft < numOfTodos && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}{" "}
    </footer>
  );
}

export default Footer;
