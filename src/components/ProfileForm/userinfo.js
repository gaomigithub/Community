import React, { Component, useState } from "react";
import { Button, Form, Card, Accordion } from "react-bootstrap";
import ImageUpload from "./userphoto";
import DogForm from "./DogForm/dogForm";

// function dogform() {
//   const [hasDog] = useState(false);
//   if (hasDog) {
//   } else {
//   }
// }

class UserInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  createUser = () => {
    const currentUser = this.state.currentUser;
    const user = {
      input: {
        id: currentUser.attributes.sub,
        userName: this.props.username,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        userEmail: this.props.userEmail
      }
    };
    this.addUser(user);
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
        <div class="container">
          <ImageUpload />
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="userEmail"
              placeholder={userEmail}
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

          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Do you have the dog?"
            />
            
          </Form.Group> */}
          <Form.Group controlId="formBasicDogForms">
            <Form.Label>
              If you have a pet, please fill out your dogs' profiles
            </Form.Label>
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
