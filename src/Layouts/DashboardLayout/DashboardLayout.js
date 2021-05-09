import React, { Component } from "react";
import Footer from "../../components/footer/Footer";

import Header from "../../components/header/Header";
import HeaderNav from "../../components/header/HeaderNav";
import Sidebar from "../../components/sidebar/Sidebar";

class DashboardLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-header">
          <Header />
          <HeaderNav />
        </div>
        <Sidebar />
        <div className="main-panel">
          <div className="content"></div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default DashboardLayout;
