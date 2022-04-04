import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import notFound from "../../images/notFound.gif";

const NotFound = () => {
  return (
    <div className="error">
      <img src={notFound} alt="" />
      <div>
        <Link className="backBtn" to="/">
          BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
