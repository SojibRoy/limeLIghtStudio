import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="container my-5">
      <h3 className="text-center ">Our Services</h3>
      <p className="text-center fs-5 pb-3">Let us make your events memorable</p>
      <Row className="g-4" xs={1} md={2} lg={3}>
        {
            services.slice(0,3).map(service => <ServiceCart
            key={service.id}
            service={service}
            ></ServiceCart>)
        }
      </Row>
      <Link className="d-flex justify-content-center btn btn-primary w-25 mx-auto m-4" >See All</Link>
    </div>
  );
};

export default Services;

