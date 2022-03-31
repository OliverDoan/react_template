import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "../../db/firebase";

import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Modal,
  Segment,
} from "semantic-ui-react";
import {
  refreshWorkDateDataId,
  setWorkDate,
  setWorkDateData,
} from "../../redux/workDate/workDateAction";
export class AddWork extends Component {
  state = {
    modal: false,
    workName: "",
    workDateListRef: firebase.database().ref("workDateList"),
    workListRef: firebase.database().ref("workList"),
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    const { workName, workListRef } = this.state;

    if (this.props.workDateData) {
      this.saveWork(this.props.workDateData.id, workName, workListRef);
    } else {
      this.saveWorkDate();
    }
  };

  closeModal = () => {
    this.setState({ modal: false });
  };
  openModal = () => {
    this.setState({ modal: true });
  };

  saveWorkDate() {
    if (this.isFormValid(this.state)) {
      const { workDateListRef, workName, workListRef } = this.state;
      const { user, workDate } = this.props;

      const key = workDateListRef.push().key;

      const newWorkDate = {
        id: key,
        date: workDate,
        uid: user.uid,
      };

      workDateListRef
        .child(key)
        .update(newWorkDate)
        .then(() => {
          console.log("saved date");
          this.saveWork(key, workName, workListRef);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  saveWork = (key, workName, workListRef) => {
    const newWork = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      name: workName,
      status: "TODO",
    };

    workListRef
      .child(key)
      .push()
      .set(newWork)
      .then(() => {
        console.log("saved work");

        this.closeModal();
        this.props.refreshWorkDateDataId(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  isFormValid = ({ workName }) => workName;

  render() {
    const { modal } = this.state;
    const { workDate } = this.props;
    return (
      <>
        {" "}
        <Segment clearing>
          <Header>
            <Icon name="calendar"></Icon>
            <Header.Content>
              <h1>Date: {workDate}</h1>
            </Header.Content>
          </Header>
          <Button icon="plus" floated="right" onClick={this.openModal}></Button>
        </Segment>
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Add a work</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Input
                  fluid
                  label="Work Name"
                  name="workName"
                  onChange={this.handleChange}
                ></Input>
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmit}>
              <Icon name="checkmark"></Icon>Add
            </Button>
            <Button color="red" inverted onClick={this.handleClose}>
              <Icon name="remove" onClick={this.closeModal}></Icon>Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = ({
  workDates: { workDate, workDateData },
  users: { user },
}) => ({
  workDate: workDate,
  workDateData: workDateData,
  user: user,
});

const mapDispatchToProps = (dispatch) => ({
  setWorkDate: (workDate) => dispatch(setWorkDate(workDate)),
  setWorkDateData: (data) => dispatch(setWorkDateData(data)),
  refreshWorkDateDataId: (id) => dispatch(refreshWorkDateDataId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWork);
