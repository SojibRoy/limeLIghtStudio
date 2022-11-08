import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ServiceCart from "./ServiceCart";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="container">
      <h3>Services</h3>
      <Row className="g-4" xs={1} md={2} lg={3}>
        {
            services.map(service => <ServiceCart
            key={service.id}
            service={service}
            ></ServiceCart>)
        }
      </Row>
    </div>
  );
};

export default Services;
