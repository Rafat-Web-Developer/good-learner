import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, description } = service;
  const navigate = useNavigate();

  const handleCheckoutBtn = () => {
    navigate("/checkout");
  };

  return (
    <Col>
      <Card className="shadow-lg">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            onClick={handleCheckoutBtn}
            variant="danger"
            className="w-100 shadow-lg fw-bold"
          >
            Checkout
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
