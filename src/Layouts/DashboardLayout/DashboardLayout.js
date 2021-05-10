import React, { Component } from "react";

import { Dashboard } from "../../components/dashboard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeaderNav from "../../components/header/HeaderNav";
import { SuperAdminSidebar } from "../../components/sidebar";

class DashboardLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-header">
          <Header />
          <HeaderNav />
        </div>
        <SuperAdminSidebar />
        <div className="main-panel">
          <div className="content">
            <Dashboard />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default DashboardLayout;
