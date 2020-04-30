import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Button,
  Col,
  Row,
  Card,
  CardDeck,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import {
  createUser,
  createDog,
  deleteReservation,
} from "../../graphql/mutations";
import { getReservation } from "../../graphql/queries";
import headiconImg from "../../img/iconfinder_user_1902268.png";
import dogiconImg from "../../img/iconfinder_Puppy_5439767.png";
import "../../styles/photo.css";

class Userprofileinfo extends Component {
  constructor(props) {
    super(props);
    this.submitChanges = this.submitChanges.bind(this);
    // this.submitDogChanges = this.submitDogChanges.bind(this);
    // this.submitUserChanges = this.submitUserChanges.bind(this);
    this.deleteRes = this.deleteRes.bind(this);
  }

  state = {
    currentUser: "",
    reservations: null,
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  toDogs = (e) => {
    e.preventDefault();
    this.props.goDogs();
  };
  // New one, function for jump to the reservaiton
  toReservaiton = (e) => {
    this.props.history.push("./reservation");
  };

  editReservation = (e) => {
    let date = this.state.reservations[e.target.id].date;
    let type = this.state.reservations[e.target.id].type;
    console.log(date, type);
    this.props.history.push("./reservation", { date: date, type: type });
  };

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    this.setState({ currentUser: user });
    setTimeout(2000);
    await this.getReservations(user.attributes.sub);
    console.log("componentDidMount is called");
  }
  // Sumbition been splitted now
  submitChanges = () => {
    this.createUser();
    this.createDog();
    this.props.history.push("./result-report");
  };
  // submitUserChanges = () => {
  //   this.createUser();
  //   this.props.history.push("./result-report");
  // };
  // submitDogChanges = () => {
  //   this.createDog();
  //   this.props.history.push("./result-report");
  // };

  createUser = () => {
    const currentUser = this.state.currentUser;
    const user = {
      input: {
        id: currentUser.attributes.sub,
        userName: this.props.username,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        userEmail: this.props.userEmail,
        picture: this.props.photo,
      },
    };
    this.addUser(user);
  };

  async addUser(userInput) {
    await API.graphql(graphqlOperation(createUser, userInput))
      .then((data) => console.log("Add User Success", data))
      .catch((err) => console.log("create user error", err));
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
          breed: val.breed,
          picture: val.picture,
        },
      };
      this.addDog(dog);
    });
  };

  async addDog(dogInput) {
    await API.graphql(graphqlOperation(createDog, dogInput))
      .then((data) => console.log("Add Dog Success", data))
      .catch((err) => console.log("create dog error", err));
  }

  async getReservations(userID) {
    await API.graphql(graphqlOperation(getReservation, { id: userID }))
      .then((data) => {
        console.log("Get Reservation Success", data);
        let reservations = data.data.getReservation.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
        this.setState({ reservations: reservations });
      })
      .catch((err) => console.log("Get Reservation error", err));
  }

  deleteRes = async (e) => {
    let resID = e.target.id;
    await API.graphql(graphqlOperation(deleteReservation, { id: `${resID}` }))
      .then((data) => console.log("Detele Reservation Success", data))
      .catch((err) => console.log("Detele Reservation error", err));

    this.getReservations(this.state.currentUser.attributes.sub);
  };

  userImage(picture) {
    if (picture) {
      return picture;
    } else {
      return headiconImg;
    }
  }

  handleUserImgError(e) {
    e.target.src = headiconImg;
  }

  dogImage(picture) {
    if (picture) {
      console.log(picture);
      return picture;
    } else {
      return dogiconImg;
    }
  }

  handleDogImgError(e) {
    e.target.src = dogiconImg;
  }

  render() {
    let { username, firstName, lastName, userEmail, dogs, photo } = this.props;
    let reservations = this.state.reservations;

    return (
      <div className="pricing-header px-3 py-3  mx-auto text-center">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Your Information</Card.Title>
              <div>
                <img
                  src={photo}
                  className="previewicon"
                  onError={this.handleUserImgError}
                  alt="user-img"
                />
              </div>
              <Card.Text>
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
            <Card.Footer style={{ height: "100px" }}>
              <small className="text-muted">
                <Button
                  variant="success"
                  style={{ height: "100%", width: "100%" }}
                  onClick={this.back}
                  block
                >
                  Edit Yourself
                </Button>
                {/* <Button
                  variant="success"
                  onClick={this.submitChanges}
                  block
                >
                  Confirm
                </Button> */}
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Your Dogs</Card.Title>
              {dogs != null ? (
                dogs.map((val, idx) => {
                  return (
                    <ListGroup.Item key={`dog-${idx}`}>
                      <Row>
                        <Col>
                          Dog Name: <b>{val.dogName}</b>
                          <br />
                          Dog Age: <b>{val.age}</b>
                          <br />
                          Dog Breed: <b>{val.breed}</b>
                          <br />
                        </Col>{" "}
                        <Col md="auto">
                          {/* <Button id={idx} variant= "success" size="sm" block>Edit</Button> */}
                          <div>
                            <img
                              src={val.picture}
                              className="previewicon"
                              onError={this.handleDogImgError}
                              alt="user-img"
                            />
                          </div>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  );
                })
              ) : (
                <span>No Dog</span>
              )}
            </Card.Body>
            <Card.Footer style={{ height: "100px" }}>
              <small className="text-muted">
                <Button
                  variant="success"
                  style={{ height: "100%", width: "100%" }}
                  onClick={this.toDogs}
                  block
                >
                  Edit for Dogs
                </Button>
                {/* <Button variant="success" onClick={this.submitChanges} block>
                  Confirm
                </Button> */}
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Your Reservations</Card.Title>
              {reservations != null ? (
                reservations.map((val, idx) => {
                  return (
                    <ListGroup.Item key={`reservation-${idx}`}>
                      <Row>
                        <Col>
                          Date: <b>{val.date}</b>
                          <br />
                          Reservation Type: <b>{val.type}</b>
                          <br />
                          Reservation Time:{" "}
                          <b>{`Start: ${val.time.startTime} End: ${val.time.endTime}`}</b>
                          <br />
                        </Col>

                        <Col md="auto">
                          {/* <Button id={idx} variant= "success" size="sm" block>Edit</Button> */}
                          <Button
                            id={val.id}
                            variant="success"
                            size="sm"
                            block
                            onClick={this.deleteRes}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  );
                })
              ) : (
                <span>No Reservation</span>
              )}
            </Card.Body>
            <Card.Footer style={{ height: "100px" }}>
              <small className="text-muted">
                <Button
                  style={{ height: "100%", width: "100%" }}
                  variant="success"
                  onClick={this.toReservaiton}
                  block
                >
                  New Reservation
                </Button>
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>

        {/* One option */}
        <Row style={{marginTop:"20px"}}>
          <Col></Col>
          <Col>
            {" "}
            <Button
              variant="success"
              onClick={this.submitChanges}
              size="lg"
              block
            >
              Submit
            </Button>
          </Col>
          <Col></Col>
        </Row>

        {/* Other option */}
        {/* <div style={{ margin: "20px", marginLeft: "30%", marginRight: "30%" }}>
          <Button
            variant="success"
            onClick={this.submitChanges}
            size="lg"
            block
          >
            Submit
          </Button>
        </div> */}
      </div>
    );
  }
}

export default withRouter(Userprofileinfo);
