import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import ImageUpload from "./userphoto";
// import DogForm from "./DogForm/dogForm";

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
      userEmail,
      dogs
    } = this.props;
    return (
      <div>
        <div class="container">
          <ImageUpload />
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="userEmail"
              placeholder="User Email"
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
        </Form>
        <Button variant="success" className="Next" onClick={this.continue}>
          Next
        </Button>
      </div>
    );
  }
}

export default UserInfo;
