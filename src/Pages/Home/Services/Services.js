import React from "react";
import Service from "../Banner/Service/Service";
import service1 from "../../../images/services/images.png";
import { Container, Row } from "react-bootstrap";

const services = [
  {
    id: 1,
    name: "Home Tutor",
    description: "Description Here...",
    img: service1,
  },
  {
    id: 2,
    name: "Online Tutor",
    description: "Description Here...",
    img: service1,
  },
  {
    id: 3,
    name: "Web Development",
    description: "Description Here...",
    img: service1,
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
