import React from "react";

import "./App.css";
import TodoItem from "./components/learn_code_tokyo/todoItem";

class App extends React.Component {
  constructor() {
    super();
    this.todoItems = [];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.todoItems.length > 0 &&
            this.todoItems.map((item, index) => (
              <TodoItem key={index} title={item} />
            ))}
          {this.todoItems.length === 0 && "Nothing"}
        </header>
      </div>
    );
  }
}

export default App;
