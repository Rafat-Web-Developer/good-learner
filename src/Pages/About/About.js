import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import myImage from "../../images/my_main_pic.jpg";

const About = () => {
  return (
    <Container className="my-5" style={{ height: "450px" }}>
      <Card className="shadow-lg py-2 w-100">
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
              <Card.Text>
                Bismillahir rahmanir Rahim. My goal is to get paradise from
                Allah. For this I went to follow all the rules of quran and
                sunnah. For get paradise I went to be a good helpful man for
                other people. For this I went to create something new which is
                helpful for the world. So, that why I learn more about Islam and
                world people mind Alhamdulillah.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;
