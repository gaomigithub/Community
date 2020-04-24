import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Col, Row, Card, CardDeck, CardColumns } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { createDogCheckIn, deleteDogCheckIn } from "../../graphql/mutations";
import { getCheckInList, getDogs } from "../../graphql/queries";
import dogiconImg from "../../img/iconfinder_Puppy_5439767.png";


class Chechin extends Component {
  constructor(props) {
    super(props);
    this.checkin = this.checkin.bind(this);
    this.checkout = this.checkout.bind(this);
  }

  state = {
    currentUser: "",
    checkinList: null,
    dogs: [],
  };

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    this.setState({ currentUser: user });
    await this.getDogs(this.state.currentUser.attributes.sub);
    await this.getCheckInList(this.props.name);
    // await this.removeExpired(this.state.currentUser.attributes.sub);
  }

  async getDogs(userID) {
    await API.graphql(graphqlOperation(getDogs, { id: userID }))
      .then((data) => {
        if (data.data.getDogs != null) {
          this.setState({
            dogs: data.data.getDogs,
          });
          console.log("Get Dog Success", data);
        }
      })
      .catch((err) => console.log(err));
  }

  async getCheckInList(parkName) {
    await API.graphql(graphqlOperation(getCheckInList, { parkName: parkName }))
      .then(async (data) => {
        console.log("Get Check-in List Success", data);
        this.setState({ checkinList: data.data.getCheckInList });
      })
      .catch((err) => console.log("Get Check-in List error", err));
  }

  async checkin() {
    let now = new Date();
    let nowEpoch = Math.floor(now.getTime() / 1000);

    if (this.state.dogs != null) {
      for (const dog of this.state.dogs) {
        dog.creationTime = nowEpoch;
        dog.TTL = nowEpoch + 86400;
        dog.park = this.props.name;
        delete dog["owner"];
        await API.graphql(graphqlOperation(createDogCheckIn, { input: dog }))
          .then((data) => console.log("Check In Dog Success", data))
          .catch((err) => console.log("Check In Dog error", err));
      }
      this.getCheckInList(this.props.name);
    }
  }

  async checkout() {
    if (this.state.dogs != null) {
      for (const dog of this.state.dogs) {
        if (dog.park === this.props.name) {
          await API.graphql(graphqlOperation(deleteDogCheckIn, { id: dog.id }))
            .then((data) => console.log("Check Out Dog Success", data))
            .catch((err) => console.log("Check Out Dog error", err));
        }
      }
      this.getCheckInList(this.props.name);
    }
  }

  handleDogImgError(e) {
    e.target.src = dogiconImg;
  }

  render() {
    let checkinList = this.state.checkinList;

    return (
      <div className="pricing-header px-3 py-3  mx-auto text-center">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>{this.props.name} Park Status</Card.Title>
              <Row style={{ height: "100px" }}>
                <Col>
                  <small className="text-muted">
                    <Button
                      style={{ height: "50%", width: "50%" }}
                      variant="success"
                      onClick={this.checkin}
                      block
                    >
                      Check In Today
                    </Button>
                  </small>
                </Col>
                <Col>
                  {" "}
                  <small className="text-muted">
                    <Button
                      style={{ height: "50%", width: "50%" }}
                      variant="success"
                      onClick={this.checkout}
                      block
                    >
                      Check Out Now
                    </Button>
                  </small>
                </Col>
              </Row>

              <CardColumns>
                {checkinList != null ? (
                  checkinList.map((val, idx) => {
                    return (
                      <Card key={`checkin-${idx}`}>
                        <div>
                          <img
                            src={val.picture}
                            className="previewicon"
                            onError={this.handleDogImgError}
                            alt="dog-img"
                          />
                        </div>
                        <Card.Body>
                          <Card.Title>{val.dogName}</Card.Title>
                        </Card.Body>
                      </Card>
                    );
                  })
                ) : (
                  <div>Empty</div>
                )}
              </CardColumns>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default withRouter(Chechin);
