import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleFeedBack = ({ feedBack }) => {
  const { name, message } = feedBack;
  return (
    <Col>
      <Card className="fw-bold">
        <Card.Header className="bg-success text-white">{name}</Card.Header>
        <Card.Body>{message}</Card.Body>
      </Card>
    </Col>
  );
};

export default SingleFeedBack;
