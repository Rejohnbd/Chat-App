import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProfilePic from "../../assets/images/profile.jpg";
import {
  faChartBar,
  faDesktop,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function SuperAdminSidebar() {
  return (
    <div className="sidebar sidebar-style-2">
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <div className="user">
            <div className="avatar-sm float-left mr-2">
              <img
                src={ProfilePic}
                alt="Profile"
                className="avatar-img rounded-circle"
              />
            </div>
            <div className="info">
              <a
                data-toggle="collapse"
                href="#collapseExample"
                aria-expanded="true"
              >
                <span>
                  Hizrian
                  <span className="user-level">Administrator</span>
                  <span className="caret"></span>
                </span>
              </a>
              <div className="clearfix"></div>

              <div className="collapse in" id="collapseExample">
                <ul className="nav">
                  <li>
                    <a href="#profile">
                      <span className="link-collapse">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#edit">
                      <span className="link-collapse">Edit Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#settings">
                      <span className="link-collapse">Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav nav-primary">
            <li className="nav-item active">
              <a href="!#">
                <i>
                  <FontAwesomeIcon icon={faHome} />
                </i>
                <p>Dashboard</p>
              </a>
            </li>

            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section">Components</h4>
            </li>
            <li className="nav-item">
              <a data-toggle="collapse" href="#charts">
                <i>
                  <FontAwesomeIcon icon={faChartBar} />
                </i>
                <p>Charts</p>
                <span className="caret"></span>
              </a>
              <div className="collapse" id="charts">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="charts/charts.html">
                      <span className="sub-item">Chart Js</span>
                    </a>
                  </li>
                  <li>
                    <a href="charts/sparkline.html">
                      <span className="sub-item">Sparkline</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a href="widgets.html">
                <i>
                  <FontAwesomeIcon icon={faDesktop} />
                </i>
                <p>Widgets</p>
                <span className="badge badge-success">4</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminSidebar;
