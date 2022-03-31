import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
class UserPane extends Component {
  render() {
    return (
      <div>
        {" "}
        <Menu vertical style={{ width: "100%" }}>
          <Menu.Item name="user">
            <Icon name="user circle"></Icon>User
          </Menu.Item>
          <Menu.Item name="key">
            <Icon name="key"></Icon>Change Password
          </Menu.Item>
          <Menu.Item name="signout" onClick={this.props.onSignOut}>
            <Icon name="sign out alternate"></Icon>Sign out
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default UserPane;
