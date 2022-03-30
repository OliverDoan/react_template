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

export class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: [],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
    if (this.isFormValid()) {
      const { email, password, errors } = this.state;
      this.setState({ errors: [], loading: true });

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((signedInUser) => {
          console.log(signedInUser);

          this.setState({ loading: false });
          this.props.history.push("/");
        })

        .catch((error) => {
          console.log(error);
          this.setState({ errors: [error], loading: false });
        });
    }
  };

  isFormValid = () => {
    if (!(this.state.email && this.state.password)) {
      const error = { message: "Email or Password is empty" };
      this.setState({ errors: [error] });
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
    const { email, password, loading, errors } = this.state;

    return (
      <>
        {" "}
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className={this.handleInputError(errors, "email")}
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
                  className={this.handleInputError(errors, "password")}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  className={loading ? "loading" : ""}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            {errors.length > 0 && (
              <Message error>
                <h3>Error</h3>
                {this.displayError(errors)}
              </Message>
            )}
            <Message>
              Don't have an account? <Link to="/register"> Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Login;
