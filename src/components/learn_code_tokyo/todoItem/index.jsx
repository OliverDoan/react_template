import React from "react";

class TodoItem extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default TodoItem;
