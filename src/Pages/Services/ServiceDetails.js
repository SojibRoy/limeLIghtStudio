import React from "react";

import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hook/useaTitle";

const ServiceDetails = () => {
  useTitle('Service Details')
  const { title, image, description, price } = useLoaderData();

  return (
    <div className="container my-4">
      <div className="d-flex flex-lg-row flex-column flex-md-column">
      
        <img src={image} alt="" />

        
        <div className="p-3">
          <h2>{title}</h2>
          <p className="py-3">{description}</p>
          <p className="fw-bold fs-5">Price: <span className="text-danger">{price}</span></p>
          <button className="btn btn-primary px-4">Book</button>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
