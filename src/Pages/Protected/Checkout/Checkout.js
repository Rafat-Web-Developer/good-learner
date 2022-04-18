import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const handleOrder = () => {
    toast.success("Complete Order Alhamdulillah.");
  };

  return (
    <div className="rafat-custom-size mx-auto my-5">
      <Card>
        <Card.Header className="bg-success text-white fw-bold">
          Shipping Information
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMobileNumber">
              <Form.Control
                type="text"
                placeholder="Enter your mobile number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control
                type="text"
                placeholder="Enter your address"
                required
              />
            </Form.Group>
            <ToastContainer />
            <Button
              variant="success"
              type="button"
              className="w-100 fw-bold"
              onClick={handleOrder}
            >
              Complete Order
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Checkout;
