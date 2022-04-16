import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { img, name, description } = service;
  return (
    <Col>
      <Card className="shadow-lg">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="danger" className="w-100 shadow-lg fw-bold">
            Checkout
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
