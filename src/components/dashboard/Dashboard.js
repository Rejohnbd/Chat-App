import {
  faAddressBook,
  faDatabase,
  faUserCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

function Dashboard() {
  return (
    <Fragment>
      <div className="panel-header bg-primary-gradient">
        <div className="page-inner py-5">
          <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
            <div>
              <h2 className="text-white pb-2 fw-bold">Dashboard</h2>
              <h5 className="text-white op-7 mb-2">
                Free Bootstrap 4 Admin Dashboard
              </h5>
            </div>
            <div className="ml-md-auto py-2 py-md-0">
              <a href="!#" className="btn btn-white btn-border btn-round mr-2">
                Manage
              </a>
              <a href="!#" className="btn btn-secondary btn-round">
                Add Pharmacy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="page-inner mt--5">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-primary card-round">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                  </div>
                  <div className="col-7 col-stats">
                    <div className="numbers">
                      <p className="card-category">Visitors</p>
                      <h4 className="card-title">1,294</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-info card-round">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <FontAwesomeIcon icon={faAddressBook} />
                    </div>
                  </div>
                  <div className="col-7 col-stats">
                    <div className="numbers">
                      <p className="card-category">Subscribers</p>
                      <h4 className="card-title">1303</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-success card-round">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <FontAwesomeIcon icon={faDatabase} />
                    </div>
                  </div>
                  <div className="col-7 col-stats">
                    <div className="numbers">
                      <p className="card-category">Sales</p>
                      <h4 className="card-title">$ 1,345</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card card-stats card-secondary card-round">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <FontAwesomeIcon icon={faUserCheck} />
                    </div>
                  </div>
                  <div className="col-7 col-stats">
                    <div className="numbers">
                      <p className="card-category">Order</p>
                      <h4 className="card-title">576</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Dashboard;
