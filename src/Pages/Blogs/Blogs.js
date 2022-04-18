import React from "react";
import { Container } from "react-bootstrap";
import Question from "./Ouestion/Question";

const questions = [
  {
    id: 1,
    question: "Difference between authorization and authentication",
    answer:
      "Authorization is the process of checking what specific applications, files, and data a user has access to permission, but Authentication is the process of verifying user is valid or not.",
  },
  {
    id: 2,
    question:
      "Why are you using firebase? What other options do you have to implement authentication?",
    answer:
      "There several reason to use firebase authentication. These are firebase provides backend services, easy-to-use, and ready-made UI libraries to authenticate users to your app, and it's most secure. Some ALternative options of firebase for implement authentication are Back4app, Parse, AWS Amplify, Backendless, Kuzzle, and so on. You also create a backend application using laravel.",
  },
  {
    id: 3,
    question:
      "What other services does firebase provide other than authentication?",
    answer:
      "Cloud Firestore, Hosting, Cloud Storage, Google Analytics, Database, Predictions, Cloud Messaging and so on.",
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
