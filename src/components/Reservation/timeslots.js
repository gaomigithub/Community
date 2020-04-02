import React, { Component } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { createReservation } from "../../graphql/mutations";
import { checkReservation, getReservation } from "../../graphql/queries";
import { uuid } from "uuidv4";
import { Auth } from "aws-amplify";
import "../../styles/Reservation/timeslots.css";

class TimeSlots extends Component {
  state = {
    timeslots: [],
    unavailableTimes: [],
    selectedTimeSlot: null,
    user: null,
    userReservations: []
    // keepPolicy: true
  };

  async componentDidMount() {
    let timeslots = await this.initTime();
    this.setState({ timeslots: timeslots });
    console.log(this.state.timeslots);

    const user = await Auth.currentAuthenticatedUser();
    this.setState({ user: user });

    this.getReservation(user.attributes.sub)
  }

  async componentDidUpdate(prevProps) {
    if (
      prevProps.date !== this.props.date ||
      prevProps.type !== this.props.type
    ) {
      this.checkCurrentReservation();
    }
  }

  checkCurrentReservation = async () => {
    let date = this.convertDate(this.props.date);
      console.log(date);
      let unavailableTimes = await this.getUnavailableTime(date);
      let updatedUnavailableTimes = [];
      for (let index = 0; index < unavailableTimes.length; index++) {
        if (this.props.type === unavailableTimes[index].type)
          updatedUnavailableTimes.push(unavailableTimes[index]);
      }
      this.setState({ unavailableTimes: updatedUnavailableTimes });
  }

  convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split("");
    var ddChars = dd.split("");

    return (
      yyyy +
      "-" +
      (mmChars[1] ? mm : "0" + mmChars[0]) +
      "-" +
      (ddChars[1] ? dd : "0" + ddChars[0])
    );
  }

  initTime() {
    let timeslots = [];
    for (let index = 5; index < 22; index = index + 2) {
      let prefix1 = index;
      let prefix2 = index + 2;
      if (prefix1 < 10) {
        prefix1 = "0" + prefix1;
      }
      if (prefix2 < 10) {
        prefix2 = "0" + prefix2;
      }
      timeslots.push({ startTime: `${prefix1}:00`, endTime: `${prefix2}:00` });
    }
    return timeslots;
  }

  async getUnavailableTime(date) {
    let times = [];
    await API.graphql(graphqlOperation(checkReservation, { date: date }))
      .then(({ data }) => {
        console.log(data);
        data.checkReservation.map((val, idx) => {
          times.push({ time: val.time, type: val.type });
        });
      })
      .catch(err => console.log(err));
    return times;
  }

  handleClick = e => {
    let t = e.target.value.split(" ~ ");
    let times = {
      startTime: t[0],
      endTime: t[1]
    };
    this.setState({ selectedTimeSlot: times }, () =>
      console.log(this.state.selectedTimeSlot)
    );
  };

  submitChanges = async () => {
    let date = this.convertDate(this.props.date);
    let unavailableTimes = await this.getUnavailableTime(date);

    for (let index = 0; index < unavailableTimes.length; index++) {
      if (this.props.type === unavailableTimes[index].type) {
          if (this.state.selectedTimeSlot.startTime === unavailableTimes[index].time.startTime) {
              console.log(this.state.selectedTimeSlot.startTime)
              console.log(unavailableTimes[index].time.startTime)
              alert("This timeslot you selected is been taken, please choose another one!")
              return null;
          }
      }
    }
    let reservationInput = {
      input: {
        id: uuid(),
        userID: this.state.user.attributes.sub,
        date: this.convertDate(this.props.date),
        time: this.state.selectedTimeSlot,
        type: this.props.type
      }
    };
    this.addReservation(reservationInput);
    this.props.history.push("/profile")
  };

  async addReservation(reservationInput) {
    await API.graphql(graphqlOperation(createReservation, reservationInput))
      .then(data => console.log("Create Reservation success ", data))
      .catch(err => console.log("Create Reservation error: ", err));
  }

  async getReservation(userID) {
    await API.graphql(graphqlOperation(getReservation, {id : userID}))
    .then((data) => {
      console.log("Get Reservation Success", data)
      this.setState({userReservations: data.data.getReservation})
    })
    .catch(err => console.log("Get Reservation error", err));
  }

  // keepPolicy = async (date) => {
  //   let userReservations = this.state.userReservations;
  //   let count = 0
  //   for (let index = 0; index < userReservations.length; index++) {
  //     if (userReservations[index].date === this.convertDate(date)) {
  //       count++;
  //     }
  //     if (count === 2) {
  //       console.log("Equal or over 2 today")
  //       this.setState({keepPolicy: false})
  //     }
  //   }
  //   console.log("Less than 2 today")
  //   this.setState({keepPolicy: true})
  // }


  showNotification() {
    this.setState({ notification: true }, () =>
      setTimeout(() => this.setState({ notification: false }), 5000)
    );
  } 

  render() {
    // let btn_class = this.state.buttonColor ? "success" : "warning";
    let timeslots = this.state.timeslots;
    let unavailableTimes = this.state.unavailableTimes;
    // let keepPolicy = this.state.keepPolicy;
    return (
      <Container>
        <div className="mb-2">
          <Row className="justify-content-md-center">
            <h2 style={{ margin: "20px" }}>Available Time Slots</h2>
          </Row>
        </div>
        {/* {this.keepPolicy(this.props.date)}
        {keepPolicy ?  */}
        <div className="mb-2">
          <Row
            className="justify-content-md-center"
            style={{ margin: "auto", width: "200px" }}
          >
            {timeslots.map((timeslotsVal, idx) => {
              let available = true;
              for (let i = 0; i < unavailableTimes.length; i++) {
                if (
                  timeslotsVal.startTime === unavailableTimes[i].time.startTime
                ) {
                  available = false;
                }
              }
              if (available) {
                return (
                  <div key={`timeslot-${idx}`} className="mb-2">
                    <Button
                      variant="success"
                      as="input"
                      type="button"
                      value={`${timeslotsVal.startTime} ~ ${timeslotsVal.endTime}`}
                      onClick={this.handleClick}
                    />
                  </div>
                );
              }
            })}
          </Row>
          <div>
            <Row>
              <Col></Col>
              <Col>
                <div
                  className="justify-content-md-center"
                  style={{ margin: "50px", textAlign: "center" }}
                >
                  <Button variant="success" onClick={this.submitChanges}>
                    Submit
                  </Button>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </div> 
        </div> 
        {/* : <div>You Have Reached Your Daily Reservation Limit (2).</div>} */}
      </Container>
    );
  }
}

export default TimeSlots;
