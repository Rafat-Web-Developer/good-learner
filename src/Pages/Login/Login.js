import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/");
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="mx-auto my-5 rafat-custom-size">
      <Card>
        <Card.Header className="bg-success text-white fw-bold">
          Login
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            {error && (
              <p className="alert alert-danger fw-bold">{error.message}</p>
            )}
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
