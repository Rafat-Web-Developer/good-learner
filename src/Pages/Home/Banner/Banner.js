import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";
import banner from "../../../images/banner.jpg";

const Banner = () => {
  return (
    <section>
      <Container>
        <img
          src={banner}
          alt=""
          className="banner_img rounded-3 border border-5 border-success"
        />
      </Container>
    </section>
  );
};

export default Banner;
