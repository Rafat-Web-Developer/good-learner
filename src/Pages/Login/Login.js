import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-50 mx-auto my-5">
      <Card>
        <Card.Header className="bg-success text-white fw-bold">
          Login
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100 fw-bold">
              Login
            </Button>
          </Form>
          <p className="my-3 fw-bold">
            Create a new account{" "}
            <Link to="/signup" className="text-decoration-none text-success">
              Signup
            </Link>
          </p>
          <div className="my-3 d-flex align-items-center justify-content-center">
            <div style={{ height: "2px" }} className="w-25 bg-success"></div>
            <p className="fw-bold text-success pt-3 px-2">Or</p>
            <div style={{ height: "2px" }} className="w-25 bg-success"></div>
          </div>
          <Button variant="success" type="submit" className="w-100 fw-bold">
            Google
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
