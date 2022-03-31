import React, { Component } from "react";
import { connect } from "react-redux";
import { DateInput } from "semantic-ui-calendar-react-17";
import {
  setWorkDate,
  setWorkDateData,
} from "../../redux/workDate/workDateAction";
import firebase from "../../db/firebase";
class WorkDatePane extends Component {
  state = { workDateListRef: firebase.database().ref("workDateList") };

  componentDidMount() {
    const now = new Date();
    const day = ("" + (now.getDate() + 100)).substr(1, 2);
    const month = ("" + (now.getMonth() + 101)).substr(1, 2);

    const stringDate = "" + day + "-" + month + "-" + now.getFullYear();

    this.handleWorkDateChange(null, { name: "", value: stringDate });
  }

  handleWorkDateChange = (event, { name, value }) => {
    this.props.setWorkDate(value);
    this.state.workDateListRef
      .orderByChild("date")
      .equalTo(value)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          const data = snapshot.val();
          const key = Object.keys(data)[0];

          this.props.setWorkDateData(data[key]);
        } else {
          this.props.setWorkDateData(null);
          console.log("error");
        }
      });
    console.log(value);
  };
  render() {
    return (
      <>
        {" "}
        <DateInput
          name="date"
          value={this.props.workDate}
          inline
          placeholder="Date"
          onChange={this.handleWorkDateChange}
        ></DateInput>
      </>
    );
  }
}

const mapStateToProps = ({ workDates: { workDate } }) => ({
  workDate: workDate,
});

const mapDispatchToProps = (dispatch) => ({
  setWorkDate: (workDate) => dispatch(setWorkDate(workDate)),
  setWorkDateData: (data) => dispatch(setWorkDateData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkDatePane);
