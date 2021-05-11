import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function PharmacyList() {
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
              <a href="!#" className="btn btn-white btn-border btn-round mr-2">
                Manage
              </a>
              <Link to="/pharmacy-add" className="btn btn-secondary btn-round">
                Pharmacy Add
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    // <div className="page-inner">
    //   <div className="page-title">Phamacy Form</div>
    //   <ul className="breadcrumbs">
    //     <li className="nav-home">
    //       <a href="#">
    //         <i className="flaticon-home"></i>
    //       </a>
    //     </li>
    //     <li className="separator">
    //       <i className="flaticon-right-arrow"></i>
    //     </li>
    //     <li className="nav-item">
    //       <a href="#">Forms</a>
    //     </li>
    //     <li className="separator">
    //       <i className="flaticon-right-arrow"></i>
    //     </li>
    //     <li className="nav-item">
    //       <a href="#">Basic Form</a>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default PharmacyList;
