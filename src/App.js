import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ClientLayout } from "./Layouts/";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ClientLayout} />
        </Switch>
        {/* <DashboardLayout /> */}
      </Router>
    );
  }
}

export default App;
