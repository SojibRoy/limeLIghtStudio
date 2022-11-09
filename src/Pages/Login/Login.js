import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import login from "../../images/login.png";
import Card from "react-bootstrap/Card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
  const { logIn, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace: true})
      })
      .then((error) => console.log(error));
  };

  const handleGoogleSingIn = () => {
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(err => console.error(err))

  }

  return (
    <div className="container">
      <h1 className="my-4 text-center">Log in now</h1>
      <Card className=" mx-auto p-5" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={login} />
        <Card.Body>
          <Form onSubmit={handleLogIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button className="w-100" variant="outline-primary" type="submit">
              Log In
            </Button>
          </Form>
        
            <button onClick={handleGoogleSingIn} className="mt-2 btn btn-outline-primary w-100">Google</button>
          
          <p className="pt-3">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
