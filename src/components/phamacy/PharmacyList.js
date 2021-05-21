import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import Loader from "react-loader-spinner";
import Datatable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    name: "Pharmacy Name",
    selector: "pharmacyName",
    sortable: true,
  },
  {
    name: "User Email",
    selector: "email",
    sortable: true,
  },
  {
    name: "Edit Pharmacy",
    button: true,
    cell: () => (
      <button className="btn btn-sm btn-info">
        <span className="btn-label">
          <FontAwesomeIcon icon={faEdit} />
        </span>
        &nbsp; Edit
      </button>
    ),
  },
  {
    name: "Delete Pharmacy",
    button: true,
    cell: () => (
      <button className="btn btn-sm btn-danger">
        <span className="btn-label">
          <FontAwesomeIcon icon={faTrash} />
        </span>
        &nbsp; Delete
      </button>
    ),
  },
];

class PharmacyList extends Component {
  state = {
    pharmacies: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getPharmacyLists();
  }

  getPharmacyLists = async () => {
    this.setState({ isLoading: true });
    await axios
      .get("/pharmacy")
      .then((res) => {
        this.setState({ pharmacies: res.data.datas, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let innerComponent = this.state.isLoading ? (
      <div className="card-body text-center">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    ) : (
      <div className="card-body">
        <Datatable
          title="Pharmacy List"
          columns={columns}
          data={this.state.pharmacies}
        />
      </div>
    );
    return (
      <Fragment>
        <div className="panel-header bg-primary-gradient">
          <div className="page-inner py-5">
            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
              <div>
                <h2 className="text-white pb-2 fw-bold">Phamacy List</h2>
                <h5 className="text-white op-7 mb-2">
                  Free Bootstrap 4 Admin Dashboard
                </h5>
              </div>
              <div className="ml-md-auto py-2 py-md-0">
                <a
                  href="!#"
                  className="btn btn-white btn-border btn-round mr-2"
                >
                  Manage
                </a>
                <Link
                  to="/pharmacy-add"
                  className="btn btn-secondary btn-round"
                >
                  Pharmacy Add
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="page-inner">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">{innerComponent}</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default PharmacyList;
