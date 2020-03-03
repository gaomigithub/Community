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
      <>
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
          <select
            defaultValue="Default"
            className=""
            id="exampleFormControlSelect1"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
          <button>Submit</button>
        </div>
      </>
    );
  }
}

export default Userprofileinfo;
