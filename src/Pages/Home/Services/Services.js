import React from "react";
import Service from "../Banner/Service/Service";
import service1 from "../../../images/services/images.png";
import service2 from "../../../images/services/home_tutor.png";
import service3 from "../../../images/services/web.png";
import { Container, Row } from "react-bootstrap";

const services = [
  {
    id: 1,
    name: "Home Tutor",
    description: "If you went to guide your child, you can choose me.",
    price: 2000,
    img: service1,
  },
  {
    id: 2,
    name: "Online Tutor",
    description: "I take the online classes using zoom and meet.",
    price: 3000,
    img: service2,
  },
  {
    id: 3,
    name: "Web Development",
    description:
      "Complete web development using html, css, bootstrap, tailwind, javascript, react, firebase, php and laravel",
    price: 5000,
    img: service3,
  },
];

const Services = () => {
  return (
    <section>
      <h1 className="text-center py-5 display-6 text-success fw-bold">
        Services
      </h1>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
