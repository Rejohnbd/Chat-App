import React, { Component } from "react";

class ClientLayout extends Component {
  checkClickHandler = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div className="login">
        <div className="wrapper wrapper-login">
          <div className="container animated fadeIn">
            <h3 className="text-center">Welcome to Chat</h3>
            <div className="login-form">
              <div className="form-group form-floating-label">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control input-border-bottom"
                  required
                />
                <label htmlFor="name" className="placeholder">
                  Name
                </label>
              </div>
              <div className="form-group form-floating-label">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  className="form-control input-border-bottom"
                  required
                />
                <label htmlFor="phone" className="placeholder">
                  Phone Number
                </label>
              </div>
              <div className="form-group form-floating-label">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control input-border-bottom"
                  required
                />
                <label htmlFor="email" className="placeholder">
                  Email Address
                </label>
                <div className="form-action mt-3">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={this.checkClickHandler}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ClientLayout;
