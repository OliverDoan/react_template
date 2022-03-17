import React, { memo, useState } from "react";

const Header = memo((props) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" />
    </header>
  );
});

export default Header;
