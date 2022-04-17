import React from "react";
import { Container } from "react-bootstrap";
import Question from "./Ouestion/Question";

const questions = [
  {
    id: 1,
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    id: 3,
    question: "Question 3",
    answer: "Answer 3",
  },
];

const Blogs = () => {
  return (
    <section className="my-5">
      <Container>
        {questions.map((question) => (
          <Question key={question.id} question_details={question}></Question>
        ))}
      </Container>
    </section>
  );
};

export default Blogs;
