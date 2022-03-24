import React from "react";

class Todo extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.handleOnClick = this.handleOnClick.bind(this);
  // }

  // handleOnClick() {
  //   // item.isCompleted =!item.isCompleted
  //   console.log(this.props.item);
  // }

  render() {
    const { item, onClick } = this.props;

    return (
      <li className={item.isCompleted ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={onClick}
            checked={item.isCompleted}
            onChange={() => {}}
          />
          <label>{item.title}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}

export default Todo;
