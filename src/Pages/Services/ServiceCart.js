import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ServiceCart = ({service}) => {
    const {image,price,title,description} = service
    return (
        
        <Col>
        <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.slice(0,100)}
            <p className='fw-bold'>Price: <span className='text-danger'>{price}</span></p>
          </Card.Text>

          <Link>
          <Button variant="outline-primary">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
  
    );
};

export default ServiceCart;