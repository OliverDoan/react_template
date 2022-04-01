import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import DonePane from "./DonePane";
import TodoPane from "./TodoPane";
import Spinner from "../ui/Spinner";

import firebase from "../../db/firebase";

class ContentPane extends Component {
  state = {
    workListRef: firebase.database().ref("works"),
    workDateId: this.props.workDateId,
    loading: true,
    todoWorkList: [],
    doneWorkList: [],
  };
  componentDidMount() {
    const { workDateId } = this.state;
    if (workDateId) {
      this.addListeners(workDateId);
      console.log(">>>Have workDateId:", workDateId);
    }
  }
  componentWillUnmount() {
    this.removeListeners();
  }

  addListeners = (workDateId) => {
    let todoWorkList = [];
    let doneWorkList = [];

    const { workListRef } = this.state;
    workListRef.child(workDateId).on("child_added", (snap) => {
      console.log(snap.val());
      this.retrieveWorks(snap.val(), snap.key, todoWorkList, doneWorkList);
    });
  };
  retrieveWorks = (work, key, todoWorkList, doneWorkList) => {
    if (work.status === "TODO") {
      todoWorkList.push({ id: key, ...work });
    } else {
      doneWorkList.push({ id: key, ...work });
    }
    this.setState({ todoWorkList, doneWorkList, loading: false });
  };
  removeListeners = () => this.state.workListRef.off();

  render() {
    const { loading, workDateId, todoWorkList, doneWorkList } = this.state;
    console.log(">>>Loading", loading);

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <Grid>
            <Grid.Column width="8">
              <TodoPane
                key={`t${todoWorkList.length}`}
                todoWorkList={todoWorkList}
                workDateId={workDateId}
              />
            </Grid.Column>
            <Grid.Column width="8">
              <DonePane
                key={`t${doneWorkList.length}`}
                doneWorkList={doneWorkList}
                workDateId={workDateId}
              />
            </Grid.Column>
          </Grid>
        )}
      </>
    );
  }
}

export default ContentPane;
