import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SidePane from "./sidePane/SidePane";
import firebase from "../db/firebase";
import { clearUser, setUser } from "../redux/users/userActions";
import { connect } from "react-redux";
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
        </Grid>
      </>
    );
  }
}

const mapStateToProps = ({ users: { loading } }) => ({});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
