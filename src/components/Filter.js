import React from "react";
import PropTypes from "prop-types";

Filter.propTypes = {};

function Filter(props) {
  // const { title, onClick, link, isActive } = props;
  return (
    <>
      <li>
        <a
          href={`#/`}
          // className={`${isActive ? "selected" : ""}`}
          // onClick={onClick}
        ></a>
      </li>
    </>
  );
}

export default Filter;
