import React from "react";
import Card from "react-bootstrap/Card";
import "./ServiceDetails.css";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hook/useaTitle";
import MyReviews from "../MyReviews/MyReviews";


const ServiceDetails = () => {
  useTitle("Service Details");
  const { title, image, description, price, reviews } = useLoaderData();
  return (
    <div className="container my-4">
      <div className="d-flex flex-lg-row flex-column flex-md-column">
        <img src={image} alt="" />

        <div className="p-3">
          <h2>{title}</h2>
          <p className="py-3">{description}</p>
          <p className="fw-bold fs-5">
            Price: <span className="text-danger">{price}</span>
          </p>
          <button className="btn btn-primary px-4">Book</button>
        </div>
        
      </div>
      <div className="my-5">
      <hr />
        <h3>Reviews</h3>
        {reviews.map((review) => (
          <Card className="mt-3">
            <Card.Header className="d-flex align-items-center">
              <img src={review.picture} className=" customer-img" alt="" />
              <p className="ps-4">{review.name}</p>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>{review.comment}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
        <hr />
        <div>
        <h3>Add your Reviews</h3>
      <MyReviews></MyReviews>
        </div>
    </div>
  );
};

export default ServiceDetails;
