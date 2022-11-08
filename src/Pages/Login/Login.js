import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import login from "../../images/login.png";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Log in now</h1>
      <Card className=" mx-auto p-5" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={login} />
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
            <p className="pt-3">
              Don't have an account? <Link to="/register">Register</Link>{" "}
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
