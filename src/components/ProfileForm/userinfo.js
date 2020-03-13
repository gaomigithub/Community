import React, { Component, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import ImageUpload from "./userphoto";
import DogForm from "./DogForm/dogForm";

class UserInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  // createUser = () => {
  //   const currentUser = this.state.currentUser;
  //   const user = {
  //     input: {
  //       id: currentUser.attributes.sub,
  //       userName: this.props.username,
  //       firstName: this.props.firstName,
  //       lastName: this.props.lastName,
  //       userEmail: this.props.userEmail
  //     }
  //   };
  //   this.addUser(user);
  // };

  handleChange = e => {
    if (["dogName", "dogAge", "dogBreed"].includes(e.target.className)) {
      let dogs = [...this.state.dogs];
      dogs[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ dogs }, () => console.log(this.state.dogs));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addDog = e => {
    this.setState(prevState => ({
      dogs: [...prevState.dogs, { dogName: "", dogAge: "", dogBreed: "" }]
    }));
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

          <Form.Group controlId="formBasicDogForms">
            <Form.Label onChange={this.handleChange}>
              If you have a pet, please fill out your dogs' profiles
              <button onClick={this.addDog}>Add a dog</button>
              {dogs.map((val, idx) => {
                let dogId = `dog-${idx}`,
                  ageId = `age-${idx}`,
                  breedId = `breed-${idx}`;
                return (
                  <div key={idx}>
                    <label htmlFor={dogId}>{`Dog #${idx + 1}`}</label>
                    <input
                      type="text"
                      name={dogId}
                      data-id={idx}
                      id={dogId}
                      placeholder="Dog Name"
                      value={dogs[idx].name}
                      className="dogName"
                    />

                    <label htmlFor={ageId}>Age</label>
                    <input
                      type="numeric"
                      name={ageId}
                      data-id={idx}
                      id={ageId}
                      placeholder="Dog Age"
                      value={dogs[idx].name}
                      className="dogAge"
                    />

                    <label htmlFor={breedId}>Breed</label>
                    <input
                      type="text"
                      name={breedId}
                      data-id={idx}
                      id={breedId}
                      placeholder="Dog Breed"
                      value={dogs[idx].name}
                      className="dogBreed"
                    />
                  </div>
                );
              })}
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
