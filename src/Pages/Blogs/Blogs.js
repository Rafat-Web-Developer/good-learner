import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Question from "./Ouestion/Question";

const Blogs = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

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
