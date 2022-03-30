import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const Register = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        Register for WorkList
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Username"
          />
          <Form.Input
            fluid
            icon="mail"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Form.Input
            fluid
            icon="repeat"
            iconPosition="left"
            placeholder="Password Confirmation"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Submit
          </Button>
        </Segment>
      </Form>
      <Message error>
        <h3>Error</h3>
        Error message
      </Message>
      <Message>
        Already a user <Link to="/login"> Sign in</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Register;
