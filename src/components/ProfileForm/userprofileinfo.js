import React, { Component } from "react";
import { Form, Formgroup, Label, Input, button } from "react-bootstrap";

class Userprofileinfo extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { username, firstName, lastName, userEmail } = this.props;
    return (
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h2>My Profile</h2>
        UserName: <b>{username}</b>
        <br />
        First Name: <b>{firstName}</b>
        <br />
        Last Name: <b>{lastName}</b>
        <br />
        Email: <b>{userEmail}</b>
        <br />
        <div className="form-group-question">
          <label htmlFor="exampleFormControlSelect1">Do you have a dog? </label>
          {/* something */}
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default Userprofileinfo;
