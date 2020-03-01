import React, { Component } from "react";

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
        User Name: <b>{username}</b>
        <br />
        User First Name: <b>{firstName}</b>
        <br />
        User Last Name: <b>{lastName}</b>
        <br />
        User Email: <b>{userEmail}</b>
        <br />
      </>
    );
  }
}

export default Userprofileinfo;
