import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const {_id, title } = useLoaderData();
  const {user} = useContext(AuthContext)

  const handleAddReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || 'unregistered'
    const comment = form.message.value;

    const reviews = {
        email,
        title,
        id:_id,
        name,
        comment
    }

    fetch('https://y-kappa-indol.vercel.app/myreviews',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('Review Added Successfully')
            form.reset();
        }
    })
    .catch(er => console.error(er))


  }
  return (
    <div className="container">
      <Form onSubmit={handleAddReview}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Email</Form.Label>
          <Form.Control type="email" name="email" defaultValue={user?.email} readOnly/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Your Name Here" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Review</Form.Label>
          <Form.Control name="message" as="textarea" rows={3} />
        </Form.Group>
        <input type="submit" className="btn btn-outline-primary" value='Add Review' />
      </Form>
    </div>
  );
};

export default MyReviews;
