import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

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
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="userEmail"
              placeholder="Your Email"
              value={userEmail}
              onChange={handleChange("userEmail")}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="User Name"
              value={username}
              onChange={handleChange("username")}
            />
          </Form.Group>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleChange("firstName")}
            />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange("lastName")}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Do you have the dog?" />
          </Form.Group>
        </Form>
        {/* <div className="userInfoContent">
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
        </div> */}
        <Button variant="success" className="Next" onClick={this.continue}>
          Next
        </Button>
      </div>
    );
  }
}

export default UserInfo;
