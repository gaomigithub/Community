import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Row, Col, Card, CardDeck } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { createUser, createDog } from "../../graphql/mutations";

class Userprofileinfo extends Component {
  constructor(props) {
    super(props);
    this.submitDogChanges = this.submitDogChanges.bind(this);
    this.submitUserChanges = this.submitUserChanges.bind(this);
  }

  state = {
    currentUser: ""
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  toDogs = e => {
    e.preventDefault();
    this.props.goDogs();
  };

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    this.setState({ currentUser: user });
  }

  submitUserChanges = () => {
    this.createUser();
    this.props.history.push("./result-report");
  };
  submitDogChanges = () => {
    this.createDog();
    this.props.history.push("./result-report");
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

  async addUser(userInput) {
    await API.graphql(graphqlOperation(createUser, userInput))
      .then(data => console.log("Add User Success", data))
      .catch(err => console.log("create user error", err));
  }

  createDog = () => {
    const currentUser = this.state.currentUser;
    const currentDog = this.props.dogs;
    console.log("dog in userprofileinfo", currentDog);
    currentDog.map((val, idx) => {
      console.log("dogs sending to database ", val);
      const dog = {
        input: {
          id: val.id != null ? val.id : val.dogID,
          ownerID: currentUser.attributes.sub,
          dogName: val.dogName,
          age: val.age,
          breed: val.breed
        }
      };
      this.addDog(dog);
    });
  };

  async addDog(dogInput) {
    await API.graphql(graphqlOperation(createDog, dogInput))
      .then(data => console.log("Add Dog Success", data))
      .catch(err => console.log("create dog error", err));
  }

  render() {
    let { username, firstName, lastName, userEmail, dogs } = this.props;
    return (
      <div class="pricing-header px-3 py-3  mx-auto text-center">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Your Information</Card.Title>
              <Card.Text>
                {/* something */}
                UserName: <b>{username}</b>
                <br />
                First Name: <b>{firstName}</b>
                <br />
                Last Name: <b>{lastName}</b>
                <br />
                Email: <b>{userEmail}</b>
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Button variant="success" onClick={this.back} block>
                  Edit Yourself
                </Button>
                <Button
                  variant="success"
                  onClick={this.submitUserChanges}
                  block
                >
                  Comfirm
                </Button>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Your Dogs</Card.Title>
              <Card.Text>
                {/* something */}
                {dogs != null ? (
                  dogs.map((val, idx) => {
                    console.log(val);
                    return (
                      <div>
                        Dog Name: <b>{val.dogName}</b>
                        <br />
                        Dog Age: <b>{val.age}</b>
                        <br />
                        Dog Breed: <b>{val.breed}</b>
                        <br />
                      </div>
                    );
                  })
                ) : (
                  <div>No Dog</div>
                )}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Button variant="success" onClick={this.toDogs} block>
                  Edit for Dogs
                </Button>
                <Button variant="success" onClick={this.submitDogChanges} block>
                  Comfirm
                </Button>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Your Reservations</Card.Title>
              <Card.Text>{/* something */}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Button variant="success" block>
                  Edit Plans
                </Button>
                <Button variant="success" block>
                  New Plan
                </Button>
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>
        {/* <h2>Your Information</h2>
        UserName: <b>{username}</b>
        <br />
        First Name: <b>{firstName}</b>
        <br />
        Last Name: <b>{lastName}</b>
        <br />
        Email: <b>{userEmail}</b>
        <br />
        <h2>Your Dog's Profile</h2>
        {dogs != null ? (
          dogs.map((val, idx) => {
            console.log(val);
            return (
              <div>
                Dog Name: <b>{val.dogName}</b>
                <br />
                Dog Age: <b>{val.age}</b>
                <br />
                Dog Breed: <b>{val.breed}</b>
                <br />
              </div>
            );
          })
        ) : (
          <div>No Dog</div>
        )} */}
        {/* <Row>
          <Col></Col>
          <Col>
            <div class="row mx-md-3 " style={{ margin: "50px" }}> */}
        {/* <div class="col px-md-auto">
                <Button size="lg" variant="success" onClick={this.back} block>
                  Edit
                </Button>
              </div>
              <div class="col px-md-auto">
                <Button size="lg" variant="success" onClick={this.toDogs} block>
                  Edit dogs
                </Button>
              </div> */}
        {/* <div class="col px-md-auto">
                <Button
                  size="lg"
                  variant="success"
                  onClick={this.submitChanges}
                  block
                >
                  Submit
                </Button>
              </div> */}
        {/* </div>
          </Col>
          <Col></Col>
        </Row> */}
      </div>
    );
  }
}

export default withRouter(Userprofileinfo);
