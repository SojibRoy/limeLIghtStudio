import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCart from './ServiceCart';
import { Row } from "react-bootstrap";

const ServiceField = () => {
    const services = useLoaderData();
    return (
        <div className='container my-5'>
            <h1 className='text-center'>Services we offer</h1>
            <p className='text-center fs-5'>Give us a chance to make your moment memoriable</p>
            <Row className="g-4" xs={1} md={2} lg={3}>
                {
                    services.map(service => <ServiceCart
                    key={service._id}
                    service={service}
                    ></ServiceCart>)
                }

            </Row>
        </div>
    );
};

export default ServiceField;