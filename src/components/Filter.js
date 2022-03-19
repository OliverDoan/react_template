import React from "react";
import PropTypes from "prop-types";

Filter.propTypes = {};

function Filter(props) {
  const { title, onClick, link, isActive } = props;
  return (
    <>
      <li>
        <a
          href={`#/${link}`}
          className={`${isActive ? "selected" : ""}`}
          onClick={onClick}
        >
          {title}
        </a>
      </li>
    </>
  );
}

export default Filter;
