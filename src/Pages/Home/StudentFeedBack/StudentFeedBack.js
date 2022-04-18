import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleFeedBack from "../SingleFeedBack/SingleFeedBack";

const feedBacks = [
  {
    id: 1,
    name: "Jubair",
    message: "Good Service",
  },
  {
    id: 2,
    name: "Fahim",
    message: "better Service",
  },
  {
    id: 3,
    name: "Nusrat",
    message: "best Service",
  },
];

const StudentFeedBack = () => {
  return (
    <section className="my-5">
      <h1 className="display-6 text-center text-success fw-bold mb-5">
        Students Feedback
      </h1>
      <Container>
        <Row xs="1" md="3" className="g-4">
          {feedBacks.map((feedBack) => (
            <SingleFeedBack
              key={feedBack.id}
              feedBack={feedBack}
            ></SingleFeedBack>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StudentFeedBack;
