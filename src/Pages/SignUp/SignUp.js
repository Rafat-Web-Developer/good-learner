import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-50 mx-auto my-5">
      <Card>
        <Card.Header className="bg-success text-white fw-bold">
          Sign Up
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Enter your password again"
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 fw-bold">
              Signup
            </Button>
          </Form>
          <p className="my-3 fw-bold">
            Already have an account{" "}
            <Link to="/login" className="text-decoration-none text-success">
              Login
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
