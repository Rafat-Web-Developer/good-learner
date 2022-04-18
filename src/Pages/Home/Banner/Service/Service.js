import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, description, price } = service;
  const navigate = useNavigate();

  const handleCheckoutBtn = () => {
    navigate("/checkout");
  };

  return (
    <Col>
      <Card className="shadow-lg">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="text-center">
            <p className="badge bg-success fs-5 fw-bold">{price}</p>
          </div>
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
