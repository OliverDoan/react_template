import React, { Component } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import SidePane from "./sidePane/SidePane";
import firebase from "../db/firebase";
import { clearUser, setUser } from "../redux/users/userActions";
import { connect } from "react-redux";
import AddWork from "./addWork/AddWork";
import ContentPane from "./contentPane/ContentPane";
import EmptyMessagePane from "./contentPane/EmptyMessagePane";
export class App extends Component {
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.clearUser();
      });
  };
  render() {
    const { workDate, workDateData, refreshWorkDateDataId } = this.props;
    return (
      <>
        <Grid
          stretched
          style={{ background: "#eee", padding: "20px" }}
          stackable
        >
          <Grid.Column width="4">
            <SidePane onSignOut={this.handleSignOut}></SidePane>
          </Grid.Column>
          <Grid.Column width="12">
            <Grid>
              <Grid.Column width="16">
                <Grid.Row style={{ paddingBottom: "20px" }}>
                  <AddWork />
                </Grid.Row>
                <Divider></Divider>
                <Grid.Row>
                  {this.props.workDateData ? (
                    <ContentPane
                      key={`${workDateData.id}${refreshWorkDateDataId}`}
                      workDateId={workDateData.id}
                    />
                  ) : (
                    <EmptyMessagePane workDate={workDate} key={workDate} />
                  )}
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = ({
  users: { loading },
  workDates: { workDate, workDateData },
}) => ({
  workDate: workDate,
  workDateData,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
