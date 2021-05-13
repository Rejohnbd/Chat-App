import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard } from "../../components/dashboard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeaderNav from "../../components/header/HeaderNav";
import { PharmacyAdd, PharmacyList } from "../../components/phamacy";
import { SuperAdminSidebar } from "../../components/sidebar";
import NotFound from "../../components/404/NotFound";

class DashboardLayout extends Component {
  state = {
    isToogled: false,
    mytest: "",
  };

  sidebarToogleHandler = () => {
    const currentState = this.state.isToogled;
    this.setState({ isToogled: !currentState });
  };

  render() {
    const { isToogled } = this.state;

    return (
      <Router>
        <div className={isToogled ? "wrapper sidebar_minimize" : "wrapper"}>
          <div className="main-header">
            <Header
              sidebarToogle={this.sidebarToogleHandler}
              toogleState={isToogled}
            />
            <HeaderNav />
          </div>
          <SuperAdminSidebar />
          <div className="main-panel">
            <div className="content">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/pharmacy-list" component={PharmacyList} />
                <Route exact path="/pharmacy-add" component={PharmacyAdd} />
                <Route component={NotFound} />
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
