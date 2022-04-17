import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [errorMessage, setErrorMessage] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/");
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setErrorMessage("Password not matched");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must have at least 6 character.");
      return;
    }

    setErrorMessage("");
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    await sendEmailVerification();
  };

  return (
    <div className="rafat-custom-size mx-auto my-5">
      <Card>
        <Card.Header className="bg-success text-white fw-bold">
          Sign Up
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                ref={nameRef}
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                ref={confirmPasswordRef}
                type="password"
                placeholder="Enter your password again"
                required
              />
            </Form.Group>
            {error && (
              <p className="alert alert-danger fw-bold">{error.message}</p>
            )}
            {errorMessage && (
              <p className="alert alert-danger fw-bold">{errorMessage}</p>
            )}
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
