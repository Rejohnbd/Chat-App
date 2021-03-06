import React, { Component } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faHome } from "@fortawesome/free-solid-svg-icons";

import FormInputGroup from "../formItems/FormInputGroup";

class PharmacyAdd extends Component {
  state = {
    pharmacyName: "",
    email: "",
    password: "",
    errors: {},
    isLoading: false,
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

  onSubmitForm = async (e) => {
    e.preventDefault();

    const { pharmacyName, email, password } = this.state;

    if (pharmacyName === "") {
      this.setState({ errors: { pharmacyName: "Pharmacy Name is Required." } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email Address is Required." } });
      return;
    } else if (
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
    ) {
      this.setState({ errors: { email: "Valid Email Address is Required." } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { password: "Default Password is Required." } });
      return;
    } else if (password.length < 6) {
      this.setState({
        errors: { password: "Default Password at least 6 digits" },
      });
      return;
    }

    const newPhamacy = {
      pharmacyName: this.state.pharmacyName,
      pharmacySlug: this.createSlug(this.state.pharmacyName),
      userType: "admin",
      email: this.state.email,
      password: this.state.password,
    };

    this.addPharmacy(newPhamacy);
  };

  addPharmacy = async (newPhamacy) => {
    this.setState({ isLoading: true });
    await axios
      .post("/pharmacy", newPhamacy)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        this.setState({
          pharmacyName: "",
          email: "",
          password: "",
          errors: {},
          isLoading: false,
        });
      })
      .catch((err) => {
        if (err.response.status === 409) {
          Swal.fire(
            err.response.statusText,
            err.response.data.message,
            "warning"
          );
        }
        this.setState({ isLoading: false });
        console.log(err.response);
      });
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
                        className="btn btn-primary btn-block"
                        onClick={this.onSubmitForm}
                        disabled={this.state.isLoading ? true : false}
                      >
                        {this.state.isLoading ? "Adding..." : "Add Pharmacy"}
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
