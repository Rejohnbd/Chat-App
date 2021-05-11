import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <div className="logo-header" data-background-color="blue">
      <Link to="/" className="logo">
        <img src={Logo} alt="navbar brand" className="navbar-brand" />
      </Link>
      <button
        className="navbar-toggler sidenav-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>
      <button className="topbar-toggler more">
        <i className="icon-options-vertical"></i>
      </button>
      <div className="nav-toggle">
        <button className="btn btn-toggle toggle-sidebar">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
}
export default Header;
