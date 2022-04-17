import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import myImage from "../../images/my_main_pic.jpg";

const About = () => {
  return (
    <Container className="my-5">
      <Card className="shadow-lg py-2">
        <Row>
          <Col
            md="4"
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={myImage}
              alt="profile_img"
              className="rounded-start border border-3 shadow-lg rounded-3"
              width="50%"
              height="175"
            />
          </Col>
          <Col md="8">
            <Card.Body>
              <Card.Title>Name : Rafat Hossain</Card.Title>
              <p className="text-muted">BSc (Hons) in CSE</p>
              <Card.Text>Phone : 01876903613</Card.Text>
              <Card.Text>Email : rafat.webdeveloper@gmail.com</Card.Text>
              <Card.Text>Address : Satkania, Chittagong, Bangladesh</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;
