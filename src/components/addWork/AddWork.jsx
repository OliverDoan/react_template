import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Modal,
  Segment,
} from "semantic-ui-react";

export class AddWork extends Component {
  state = {
    modal: false,
    workName: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {};

  closeModal = () => {
    this.setState({ modal: false });
  };
  openModal = () => {
    this.setState({ modal: true });
  };
  render() {
    const { modal } = this.state;
    return (
      <>
        {" "}
        <Segment clearing>
          <Header>
            <Icon name="calendar"></Icon>
            <Header.Content>
              <h1>Date: 31/03/2022</h1>
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

export default AddWork;
