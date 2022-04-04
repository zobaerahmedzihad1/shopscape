import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import notFound from "../../images/notFound.gif";

const NotFound = () => {
  return (
    <div className="error">
      <div className="error-image">
        <img src={notFound} alt="" />
      </div>
      <div className="error-message">
        <h2>404</h2>
        <h3>PAGE NOT FOUND</h3>
        <p>
          The page you are looking for might have been removed <br /> had it's name
          changed or is temporary unavailable.
        </p>

        <Link className="backBtn" to="/">
          BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
