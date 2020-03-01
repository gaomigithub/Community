import React, { Component } from "react";
import UserInfo from "./userinfo.js";
import Userprofileinfo from "./userprofile.js";

class UserForm extends Component {
  state = {
    step: 1,
    username: "",
    firstName: "",
    lastName: "",
    userEmail: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  showStep = () => {
    const { step, username, firstName, lastName, userEmail } = this.state;
    if (step === 1)
      return (
        <UserInfo
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          username={username}
          firstName={firstName}
          lastName={lastName}
          userEmail={userEmail}
        />
      );
    if (step === 2)
      return (
        <Userprofileinfo
          username={username}
          firstName={firstName}
          lastName={lastName}
          userEmail={userEmail}
        />
      );
  };

  render() {
    const { step } = this.state;
    return (
      <>
        <h2>User Profile</h2>
        {this.showStep()}
      </>
    );
  }
}

export default UserForm;
