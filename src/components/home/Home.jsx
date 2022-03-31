import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react-17";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
} from "semantic-ui-react";
export class Home extends Component {
  state = { date: "" };
  handleWorkDateChange = (event, { name, value }) => {
    console.log(value);
  };
  render() {
    return (
      <>
        <Grid
          stretched
          style={{ background: "#eee", padding: "20px" }}
          stackable
        >
          <Grid.Column width="4">
            <Segment>
              <Header>
                <Icon name="tasks"></Icon>
                <Header.Content>Worklist</Header.Content>
              </Header>
              <Divider></Divider>
              <Menu vertical style={{ width: "100%" }}>
                <Menu.Item name="user">
                  <Icon name="user circle"></Icon>User
                </Menu.Item>
                <Menu.Item name="key">
                  <Icon name="key"></Icon>Change Password
                  {/* <i class="key icon"></i> */}
                </Menu.Item>
                <Menu.Item name="signout">
                  <Icon name="sign out alternate"></Icon>Sign out
                </Menu.Item>
              </Menu>
              <Divider></Divider>
              <DateInput
                name="date"
                value={this.state.date}
                inline
                placeholder="Date"
                onChange={this.handleWorkDateChange}
              ></DateInput>
            </Segment>
          </Grid.Column>

          <Grid.Column width="12">
            <Grid>
              <Grid.Column width="16">
                <Grid.Row style={{ paddingBottom: "20px" }}>
                  <Segment clearing>
                    <Header>
                      <Icon name="calendar"></Icon>
                      <Header.Content>
                        <h1>Date: 31/03/2022</h1>
                      </Header.Content>
                    </Header>
                    <Button icon="plus" floated="right"></Button>
                  </Segment>
                </Grid.Row>
                <Grid.Row>
                  <Grid>
                    <Grid.Column width="8">
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
                    </Grid.Column>
                    <Grid.Column width="8">
                      <Segment stacked>
                        <Header>
                          <Icon
                            name="calendar check outline"
                            color="green"
                          ></Icon>
                          <Header.Content>Done</Header.Content>
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
                    </Grid.Column>
                  </Grid>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Home;
