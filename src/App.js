import React from "react";

import "./App.css";
import TodoItem from "./components/learn_code_tokyo/todoItem";

class App extends React.Component {
  constructor() {
    super();
    this.todoItems = ["React", "Hook", "Redux"];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.todoItems.map((item, index) => (
            <TodoItem key={index} title={item} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
