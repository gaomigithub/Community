import React, { Component } from "react";

class UserInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const {
      handleChange,
      username,
      firstName,
      lastName,
      userEmail
    } = this.props;
    return (
      <>
        <h2>User Profile:</h2>
        <div className="userInfoContent">
          <label>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={username}
              onChange={handleChange("username")}
            />
          </label>
          <label>
            <input
              type="text"
              name="firstName"
              placeholder="first Name"
              value={firstName}
              onChange={handleChange("firstName")}
            ></input>
          </label>
          <label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange("lastName")}
            ></input>
          </label>
          <label>
            <input
              type="email"
              name="userEmail"
              placeholder="Your Email"
              value={userEmail}
              onChange={handleChange("userEmail")}
            ></input>
          </label>
        </div>
        <button className="Next" onClick={this.continue}>
          Next >>
        </button>
      </>
    );
  }
}

export default UserInfo;
