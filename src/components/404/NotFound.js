import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./NotFound.css";

import Img404 from "../../assets/images/404.jpeg";

function NotFound() {
  return (
    <div className="page-not-found" style={{ backgroundImage: `${Img404}` }}>
      <div className="wrapper not-found">
        <h1 className="animated fadeIn">404</h1>
        <div className="desc animated fadeIn">
          <span>OOPS!</span>
          <br />
          Looks like you get lost
        </div>
        <Link
          to="/"
          className="btn btn-primary btn-back-home mt-4 animated fadeInUp"
        >
          <span className="btn-label mr-2">
            <FontAwesomeIcon icon={faHome} />
          </span>
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
