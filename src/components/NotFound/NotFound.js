import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="error">
      <h2>Page Not Found.</h2>
      <h3>404</h3>

      <Link className="backBtn" to="/">BACK HOME</Link>
    </div>
  );
};

export default NotFound;
