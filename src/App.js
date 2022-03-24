import React from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
// import TodoItem from "./components/learn_code_tokyo/todoItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "React", isCompleted: true },
        { title: "React2", isCompleted: true },
        { title: "React3", isCompleted: false },
      ],
    };
  }

  handleOnClickMakeComplete(item) {
    // this.setState({ ...item, isCompleted: !item.completed });
    // console.log("Clicked");
    return () => {
      this.setState({
        todoItems: this.state.todoItems.map((i) =>
          i !== item ? { ...i } : { ...i, isCompleted: !item.isCompleted }
        ),
      });
    };
  }

  render() {
    const { todoItems } = this.state;
    return (
      <>
        <div className="todoapp">
          <Header />
          <section className="main ">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
              {todoItems.map((item, index) => (
                <Todo
                  key={index}
                  item={item}
                  onClick={this.handleOnClickMakeComplete(item)}
                />
              ))}
            </ul>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
