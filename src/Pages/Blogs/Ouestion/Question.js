import React from "react";
import { Card } from "react-bootstrap";

const Question = ({ question_details }) => {
  const { question, answer } = question_details;
  return (
    <Card className="my-3 shadow-lg">
      <Card.Header className="fw-bold bg-success text-white">
        {question}
      </Card.Header>
      <Card.Body>
        <Card.Text className="fw-bold">{answer}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Question;
