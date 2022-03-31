import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react-17";

class WorkDatePane extends Component {
  state = { date: "" };
  handleWorkDateChange = (event, { name, value }) => {
    console.log(value);
  };
  render() {
    return (
      <>
        {" "}
        <DateInput
          name="date"
          value={this.state.date}
          inline
          placeholder="Date"
          onChange={this.handleWorkDateChange}
        ></DateInput>
      </>
    );
  }
}

export default WorkDatePane;
