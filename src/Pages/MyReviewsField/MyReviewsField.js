import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReviewsField = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setreviews] = useState([]);

  const url = `https://y-kappa-indol.vercel.app/myreviews?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, [user?.email]);

  return (
    <div className="container">
      <h3 className="text-center my-3">You have Reviewed {reviews.length} services </h3>
      <div>
        {reviews.map((review) => (
          <>
            <h3>{review.title}</h3>
            <Card className="my-3">
              <Card.Header className="d-flex align-items-center d-flex justify-content-between">
                <p className="ps-4">{review.name}</p>
                <div>
                    <button className="btn btn-outline-primary me-3">Edit</button>
                    <button className="btn btn-outline-primary">Delete</button>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>{review.comment}</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default MyReviewsField;
