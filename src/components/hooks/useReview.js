import { useEffect, useState } from "react";

const useReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setReview(data));
  }, []);
  return [review, setReview];
};

export default useReview;
