import React, { useState } from "react";
import { Container, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const SignUpScreen = () => {
  const [value, setValue] = useState();
  return (
    <Container maxWidht="sm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>FullName</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Again</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password again"
          />
        </Form.Group>
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        ></PhoneInput>
        <Button variant="primary" type="Login" className="mt-4">
          <Link className="text-white text-decoration-none" to="/auth">
            Sign Up
          </Link>
        </Button>
      </Form>
    </Container>
  );
};
export default SignUpScreen;
