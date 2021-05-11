import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard } from "../../components/dashboard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeaderNav from "../../components/header/HeaderNav";
import { PharmacyAdd, PharmacyList } from "../../components/phamacy";
import { SuperAdminSidebar } from "../../components/sidebar";

class DashboardLayout extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="main-header">
            <Header />
            <HeaderNav />
          </div>
          <SuperAdminSidebar />
          <div className="main-panel">
            <div className="content">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/pharmacy-list" component={PharmacyList} />
                <Route exact path="/pharmacy-add" component={PharmacyAdd} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardLayout;
