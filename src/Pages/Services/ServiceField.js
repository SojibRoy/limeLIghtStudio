import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Row } from "react-bootstrap";
import ServiceCartAll from './ServiceCartAll';

const ServiceField = () => {
    const services = useLoaderData();
    return (
        <div className='container my-5'>
            <h1 className='text-center'>Services we offer</h1>
            <p className='text-center fs-5'>Give us a chance to make your moment memoriable</p>
            <Row className="g-4" xs={1} md={2} lg={3}>
                {
                    services.map(service => <ServiceCartAll
                    key={service._id}
                    service={service}
                    ></ServiceCartAll>)
                }

            </Row>
        </div>
    );
};

export default ServiceField;