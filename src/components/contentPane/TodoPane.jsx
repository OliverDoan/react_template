import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Divider, Header, Icon, Segment } from "semantic-ui-react";
import { refreshWorkDateDataId } from "../../redux/workDate/workDateAction";
class TodoPane extends Component {
  handleDeleteWork = (work) => {};

  handleUpdateStatus = (work) => {};
  render() {
    const { todoWorkList } = this.props;
    return (
      <>
        <Segment stacked>
          <Header>
            <Icon name="bell" color="red"></Icon>
            <Header.Content>To-do</Header.Content>
          </Header>
          <Divider></Divider>
          {todoWorkList &&
            todoWorkList.length > 0 &&
            todoWorkList.map((item) => (
              <Segment attached clearing>
                {item.name}
                <Button
                  icon="trash alternate"
                  inverted
                  color="red"
                  floated="right"
                  size="tiny"
                  onClick={() => this.handleDeleteWork(item)}
                ></Button>
                <Button
                  icon="checkmark"
                  inverted
                  color="green"
                  floated="right"
                  size="tiny"
                  onClick={() => this.handleUpdateStatus(item)}
                ></Button>
              </Segment>
            ))}
        </Segment>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  refreshWorkDateDataId: (id) => dispatch(refreshWorkDateDataId(id)),
});

export default connect(null, mapDispatchToProps)(TodoPane);
