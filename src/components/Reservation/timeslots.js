import React, { Component, useState } from "react";
import { Container, Row, Button, Col, Alert } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { createReservation, deleteReservation } from "../../graphql/mutations";
import { checkReservation } from "../../graphql/queries";
import { uuid } from "uuidv4";
import { Auth } from "aws-amplify";
import { CSSTransition } from "react-transition-group";

class TimeSlots extends Component {
  state = {
    timeslots: [],
    unavailableTimes: [],
    selectedTimeSlot: null,
    user: null
    // buttonColor: true,
    // showButton: true,
    // showMessage: false
  };

  async componentDidMount() {
    let timeslots = await this.initTime();
    this.setState({ timeslots: timeslots });
    console.log(this.state.timeslots);

    const user = await Auth.currentAuthenticatedUser();
    this.setState({ user: user });
  }

  async componentDidUpdate(prevProps) {
    if (
      prevProps.date !== this.props.date ||
      prevProps.type !== this.props.type
    ) {
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

  submitChanges = () => {
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
  };

  async addReservation(reservationInput) {
    await API.graphql(graphqlOperation(createReservation, reservationInput))
      .then(data => console.log("Create Reservation success ", data))
      .catch(err => console.log("Create Reservation error: ", err));
  }

  showNotification() {
    this.setState({ notification: true }, () =>
      setTimeout(() => this.setState({ notification: false }), 5000)
    );
  }

  // changeColor = () => {
  //   this.setState({ buttonColor: !this.state.buttonColor });
  // };

  // TransitionGroup Test
  // buttonExample = () => {
  //   return (
  //     <div>
  //       {this.state.showButton && (
  //           <Button
  //             onClick={() => this.setState({ showMessage: true })}
  //             size="lg"
  //           >
  //             Show Message
  //           </Button>
  //         ) &&
  //         console.log("Transition button")}
  //       <CSSTransition
  //         in={this.state.showMessage}
  //         timeout={300}
  //         classNames="alert"
  //         unmountOnExit
  //         onEnter={() => this.setState({ showButton: false })}
  //         onExited={() => this.setState({ showButton: true })}
  //       >
  //         <Alert
  //           variant="primary"
  //           dismissible
  //           onClose={() => this.setState({ showMessage: false })}
  //         >
  //           <Alert.Heading>Animated alert message</Alert.Heading>
  //           <p>
  //             This alert message is being transitioned in and out of the DOM.
  //           </p>
  //           <Button onClick={() => this.setState({ showMessage: false })}>
  //             Close
  //           </Button>
  //         </Alert>
  //       </CSSTransition>
  //     </div>
  //   );
  // };

  render() {
    // let btn_class = this.state.buttonColor ? "success" : "warning";
    let timeslots = this.state.timeslots;
    let unavailableTimes = this.state.unavailableTimes;
    return (
      <Container>
        <div className="mb-2">
          <Row className="justify-content-md-center">
            <h2 style={{ margin: "20px" }}>Available Time Slots</h2>
          </Row>
        </div>
        <div className="mb-2">
          <Row
            className="justify-content-md-center"
            style={{ margin: "auto", width: "200px" }}
          >
            {/* <ToggleButtonGroup type="radio" name="options"> */}
            {timeslots.map((timeslotsVal, idx) => {
              let available = true;
              for (let i = 0; i < unavailableTimes.length; i++) {
                if (
                  timeslotsVal.startTime === unavailableTimes[i].time.startTime
                ) {
                  available = false;
                  // console.log(`This time ${timeslotsVal.startTime} is unavailable`)
                }
              }
              if (available) {
                // console.log(`This time ${timeslotsVal.startTime} is available`)
                return (
                  <div className="mb-2">
                    <Button
                      // variant={btn_class}
                      variant="success"
                      as="input"
                      type="button"
                      value={`${timeslotsVal.startTime} ~ ${timeslotsVal.endTime}`}
                      onClick={this.handleClick}
                    />
                  </div>
                );
              }
              // console.log("selected date in timeslots", this.props.date)
              // console.log("selected type in timeslots", this.props.type)
            })}
            {/* </ToggleButtonGroup> */}
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
                  {/* {this.buttonExample} */}
                </div>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default TimeSlots;
