import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel className="container">
      <Carousel.Item className="position-relative">
        <div className="carousel-overlay">
          <img
            className=" d-block mx-auto w-100"
            src={img1}
            alt="First slide"
          />
        </div>
        <Carousel.Caption className="text-start position-absolute top-50
        text-center">
          <h1 >Bringing Out The best</h1>
          <p>Lime-Light team always focus on making your memories extra special</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="position-relative">
        <div className="carousel-overlay">
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </div>

        <Carousel.Caption className="text-start position-absolute top-50 text-center">
          <h1>Bringing Out The best</h1>
          <p>Lime-Light team always focus on making your memories extra special</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="position-relative">
        <div className="carousel-overlay">
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </div>

        <Carousel.Caption className="text-start position-absolute top-50 text-center">
          <h1>Bringing Out The best</h1>
          <p>
            Lime-Light team always focus on making your memories extra special
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
