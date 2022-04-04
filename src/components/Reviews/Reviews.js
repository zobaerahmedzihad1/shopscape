import React from "react";
import useReview from "../hooks/useReview";
import "./Reviews.css";

const Reviews = () => {
  const [review, setReview] = useReview();
  console.log(review);

  return (
    <div>
      <h3>This is review.</h3>
    </div>
  );
};

export default Reviews;
