import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Divider, Header, Icon, Segment } from "semantic-ui-react";
class TodoPane extends Component {
  render() {
    return (
      <>
        <Segment stacked>
          <Header>
            <Icon name="bell" color="red"></Icon>
            <Header.Content>To-do</Header.Content>
          </Header>
          <Divider></Divider>
          <Segment attached clearing>
            Learn React
            <Button
              icon="trash alternate"
              inverted
              color="red"
              floated="right"
              size="tiny"
            ></Button>
            <Button
              icon="checkmark"
              inverted
              color="green"
              floated="right"
              size="tiny"
            ></Button>
          </Segment>
        </Segment>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPane);
