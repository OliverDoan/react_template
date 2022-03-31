import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import store from "./redux/store";
import firebase from "./db/firebase";
import { withRouter } from "react-router-dom";
import { setUser, clearUser } from "./redux/users/userActions";
import Spinner from "./components/ui/Spinner";
class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push("/");
        this.props.setUser(user);
      } else {
        this.props.history.push("/login");
        this.props.clearUser();
      }
    });
  }
  render() {
    const { loading } = this.props;
    return (
      <>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ users: { loading } }) => ({
  loading: loading,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser()),
});

const RootWithAuth = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Root)
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <RootWithAuth />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
