import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faDatabase,
  faEnvelope,
  faFilePdf,
  faLayerGroup,
  faPen,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

import ProfilePic from "../../assets/images/profile.jpg";

function HeaderNav() {
  return (
    <nav
      className="navbar navbar-header navbar-expand-lg"
      data-background-color="blue2"
    >
      <div className="container-fluid">
        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
          <li className="nav-item dropdown hidden-caret">
            <a
              className="nav-link dropdown-toggle"
              href="!#"
              id="messageDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <ul
              className="dropdown-menu messages-notif-box animated fadeIn"
              aria-labelledby="messageDropdown"
            >
              <li>
                <div className="dropdown-title d-flex justify-content-between align-items-center">
                  Messages
                  <a href="!#" className="small">
                    Mark all as read
                  </a>
                </div>
              </li>
              <li>
                <div className="message-notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    <a href="!#">
                      <div className="notif-img">
                        <img src={ProfilePic} alt="Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Jimmy Denis</span>
                        <span className="block">How are you ?</span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  className="see-all"
                  href="!#"
                  onClick={(e) => e.preventDefault()}
                >
                  See all messages<i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown hidden-caret">
            <a
              className="nav-link dropdown-toggle"
              href="!#"
              id="notifDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBell} size="2x" />
              <span className="notification">4</span>
            </a>
            <ul
              className="dropdown-menu notif-box animated fadeIn"
              aria-labelledby="notifDropdown"
            >
              <li>
                <div className="dropdown-title">
                  You have 4 new notification
                </div>
              </li>
              <li>
                <div className="notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    <a href="!#">
                      <div className="notif-icon notif-primary">
                        <i className="fa fa-user-plus"></i>
                      </div>
                      <div className="notif-content">
                        <span className="block">New user registered</span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  className="see-all"
                  href="!#"
                  onClick={(e) => e.preventDefault()}
                >
                  See all notifications<i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown hidden-caret">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="!#"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faLayerGroup} size="2x" />
            </a>
            <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
              <div className="quick-actions-header">
                <span className="title mb-1">Quick Actions</span>
                <span className="subtitle op-8">Shortcuts</span>
              </div>
              <div className="quick-actions-scroll scrollbar-outer">
                <div className="quick-actions-items">
                  <div className="row m-0">
                    <a className="col-6 col-md-4 p-0" href="!#">
                      <div className="quick-actions-item">
                        <FontAwesomeIcon icon={faFilePdf} size="2x" />
                        <span className="text">Generated Report</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="!#">
                      <div className="quick-actions-item">
                        <FontAwesomeIcon icon={faDatabase} size="2x" />
                        <span className="text">Create New Database</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="!#">
                      <div className="quick-actions-item">
                        <FontAwesomeIcon icon={faPen} size="2x" />
                        <span className="text">Create New Post</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="!#">
                      <div className="quick-actions-item">
                        <FontAwesomeIcon icon={faTasks} size="2x" />
                        <i className="flaticon-interface-1"></i>
                        <span className="text">Create New Task</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="!#">
                      <div className="quick-actions-item">
                        <FontAwesomeIcon icon={faTasks} size="2x" />
                        <span className="text">Completed Tasks</span>
                      </div>
                    </a>
                    <a className="col-6 col-md-4 p-0" href="!#">
                      <div className="quick-actions-item">
                        <FontAwesomeIcon icon={faTasks} size="2x" />
                        <span className="text">Create New Invoice</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown hidden-caret">
            <a
              className="dropdown-toggle profile-pic"
              data-toggle="dropdown"
              href="!#"
              aria-expanded="false"
            >
              <div className="avatar-sm">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="avatar-img rounded-circle"
                />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-user animated fadeIn">
              <div className="dropdown-user-scroll scrollbar-outer">
                <li>
                  <div className="user-box">
                    <div className="avatar-lg">
                      <img
                        src={ProfilePic}
                        alt="profile"
                        className="avatar-img rounded"
                      />
                    </div>
                    <div className="u-text">
                      <h4>Hizrian</h4>
                      <p className="text-muted">hello@example.com</p>
                      <a
                        href="profile.html"
                        className="btn btn-xs btn-secondary btn-sm"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="!#">
                    Account Setting
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="!#">
                    Logout
                  </a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
