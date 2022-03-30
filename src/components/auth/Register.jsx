import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import firebase from "../../db/firebase";
import md5 from "md5";
export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    login: false,
    errors: [],
    userRef: firebase.database().ref("users"),
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      const { username, email, password, errors } = this.state;
      this.setState({ errors: [], loading: true });

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((createUser) => {
          console.log(createUser);
          createUser.user
            .updateProfile({
              displayName: username,
              photoURL: `http://gravatar.com/avatar/${md5(
                createUser.user.email
              )}?d=identicon`,
            })
            .then(() => {
              this.saveUser(createUser).then(() => {
                console.log("user saved");
                this.setState({ loading: false });
                this.props.history.push("/login");
              });
            });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ errors: [...errors, error], loading: false });
        });
    }
  };

  saveUser = (createUser) => {
    return this.state.userRef.child(createUser.user.uid).set({
      name: createUser.user.displayName,
      avatar: createUser.user.photoURL,
    });
  };

  isFormValid = () => {
    let errors = [];
    let error;
    const { username, email, password, passwordConfirm } = this.state;

    if (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirm.length
    ) {
      error = { message: "Please enter all required fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (password.length < 6 || passwordConfirm.length < 6) {
      error = { message: "Password is less than 6 characters" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (password !== passwordConfirm) {
      error = { message: "Passwords do not match" };
      this.setState({ errors: errors.concat(error) });
      return false;
    }
    return true;
  };

  displayError = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  render() {
    const { username, email, password, passwordConfirm, loading } = this.state;
    return (
      <>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Register for WorkList
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="username"
                  onChange={this.handleChange}
                  value={username}
                  className={this.handleInputError(
                    this.state.errors,
                    "username"
                  )}
                />
                <Form.Input
                  fluid
                  name="email"
                  value={email}
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handleChange}
                  className={this.handleInputError(this.state.errors, "email")}
                />
                <Form.Input
                  fluid
                  name="password"
                  value={password}
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                  className={this.handleInputError(
                    this.state.errors,
                    "password"
                  )}
                />
                <Form.Input
                  fluid
                  name="passwordConfirm"
                  value={passwordConfirm}
                  icon="repeat"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  type="password"
                  onChange={this.handleChange}
                  className={this.handleInputError(
                    this.state.errors,
                    "passwordConfirm"
                  )}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  className={loading ? "loading" : ""}
                >
                  Submit
                </Button>
              </Segment>
            </Form>
            {this.state.errors.length > 0 && (
              <Message error>
                <h3>Errorrrr</h3>
                {this.displayError(this.state.errors)}
              </Message>
            )}
            <Message>
              Already a user <Link to="/login"> Sign in</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Register;
