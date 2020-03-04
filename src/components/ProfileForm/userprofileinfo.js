import React, { Component } from "react";
import { Form, Formgroup, Label, Input, Button } from "react-bootstrap";

class Userprofileinfo extends Component {
  constructor(props) {
    super(props);
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { username, firstName, lastName, userEmail } = this.props;
    return (
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h2>Your Information</h2>
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
        </div>
        <div>
          <Button variant="success" onClick={this.back}>
            Back
          </Button>
          <Button variant="success">Submit</Button>
        </div>
      </div>
    );
  }
}

export default Userprofileinfo;

// function Userprofile() {
//   const back = event => {
//     event.preventDefault();
//   };
//   return <div>hi</div>;
// }
