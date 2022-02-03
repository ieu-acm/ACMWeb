import React from "react";
import { Container, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const AuthScreen = () => {
  return (
    <Container maxWidht="sm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to="/auth/signup" className="py-3">
          SignUp
        </Link>
        <Button variant="primary" type="Login" className="m-2">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AuthScreen;
