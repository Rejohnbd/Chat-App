import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faHome } from "@fortawesome/free-solid-svg-icons";

import FormInputGroup from "../formItems/FormInputGroup";

class PharmacyAdd extends Component {
  state = {
    pharmacyName: "",
    email: "",
    password: "",
    errors: {},
  };

  createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
      errors: {},
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    const { pharmacyName, email, password } = this.state;

    if (pharmacyName === "") {
      this.setState({ errors: { pharmacyName: "Pharmacy Name is Required." } });
    }

    if (email === "") {
      this.setState({ errors: { email: "Email Address is Required." } });
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email
      )
    ) {
      this.setState({ errors: { email: "Valid Email Address is Required." } });
    }

    if (password === "") {
      this.setState({ errors: { password: "Default Password is Required." } });
    }

    const newPhamacy = {
      pharmacyName: this.state.pharmacyName,
      phamacySlug: this.createSlug(this.state.pharmacyName),
      type: "admin",
      email: this.state.email,
      password: this.state.password,
    };

    console.log(newPhamacy);
  };

  render() {
    return (
      <div className="page-inner">
        <div className="page-header">
          <h4 className="page-title">Pharmacy Add</h4>
          <ul className="breadcrumbs">
            <li className="nav-home">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li className="separator">
              <FontAwesomeIcon icon={faAngleRight} />
            </li>
            <li className="nav-item">
              <Link to="/pharmacy-list">Pharmacy List</Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Pharmacy Add Form</div>
              </div>
              <div className="card-body">
                <form>
                  <FormInputGroup
                    id="pharmacyName"
                    label="Pharmacy Name"
                    type="text"
                    name="pharmacyName"
                    required={true}
                    placeholder="Enter Pharmacy Name"
                    onChange={this.onChangeHandler}
                    value={this.state.pharmacyName}
                    error={this.state.errors.pharmacyName}
                  />

                  <FormInputGroup
                    id="email"
                    label="Email Address"
                    type="email"
                    name="email"
                    required={true}
                    placeholder="Enter Email Address"
                    onChange={this.onChangeHandler}
                    value={this.state.email}
                    error={this.state.errors.email}
                  />

                  <FormInputGroup
                    id="password"
                    label="Default Password"
                    type="password"
                    name="password"
                    required={true}
                    placeholder="Enter Default Password"
                    onChange={this.onChangeHandler}
                    value={this.state.password}
                    error={this.state.errors.password}
                  />

                  <div className="row justify-content-center">
                    <div className="col-6">
                      <button
                        className="btn btn-success btn-block"
                        onClick={this.onSubmitForm}
                      >
                        Add Pharmacy
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PharmacyAdd;
