import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
class HeaderPane extends Component {
  render() {
    return (
      <div>
        <Header>
          <Icon name="tasks"></Icon>
          <Header.Content>Worklist</Header.Content>
        </Header>
      </div>
    );
  }
}

export default HeaderPane;
