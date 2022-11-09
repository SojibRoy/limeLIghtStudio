import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import login from "../../images/login.png";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../Hook/useaTitle";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    useTitle('Register')

    const handleSignUp = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            
        })
        .catch(error => console.error(error))

    }
  return (
    <div>
      <h1 className="my-4 text-center">Register</h1>
      <Card className=" mx-auto p-5" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={login} />
        <Card.Body>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button className="w-100" variant="outline-primary" type="submit">
              Register
            </Button>
            <p className="pt-3">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
