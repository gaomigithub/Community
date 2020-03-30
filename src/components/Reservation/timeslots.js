import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { checkReservation } from "../../graphql/queries";


class TimeSlots extends Component {
    state = {
      timeslots : [],
      unavailableTimes: []
    };

    async componentDidMount() {
        let timeslots = await this.initTime();
        this.setState({timeslots : timeslots })
        console.log(this.state.timeslots)

        let unavailableTimes = await this.getUnavailableTime("2020-03-26");
        this.setState({unavailableTimes : unavailableTimes})
        console.log(this.state.unavailableTimes)
    }

    initTime() {
        let timeslots = []
        for (let index = 6; index < 24; index = index + 2) {
            timeslots.push({startTime: `${index}:00`, endTime: `${index+2}:00`});
        }
        return timeslots
    }

    async getUnavailableTime(date) {
        let times = [];
        await API.graphql(graphqlOperation(checkReservation, {date : date}))
            .then(({data}) => {
                console.log(data)
                data.checkReservation.map((val, idx) => {
                    times.push({time: val.time, type: val.type})
                })
            })
            .catch(err => console.log(err));
        return times;
    }

    // checkAvailableTimeButtons() {
    //     let timeslots = this.state.timeslots;
    //     let unavailableTimes = this.state.unavailableTimes;

    //     timeslots.map((timeslotsVal, idx) => {
    //         let available = true;
    //         for (let i = 0; i < unavailableTimes.length; i++) {
    //             if (timeslotsVal.startTime === unavailableTimes[i].time.startTime) {
    //                 available = false;
    //                 console.log(`This time ${timeslotsVal.startTime} is unavailable`)
    //             }
    //         }
    //         if (available) {
    //             console.log(`This time ${timeslotsVal.startTime} is available`)
    //             return <Button variant="success" as="input" type="button" value={`${timeslotsVal.startTime} ~ ${timeslotsVal.endTime}`} />
    //         }
    //     })
    // }

    render() {
        let timeslots = this.state.timeslots;
        let unavailableTimes = this.state.unavailableTimes;
        return (
        <Container >
          <div className="mb-2">
            <Row className="justify-content-md-center">
              <h2>Available Time Slots</h2>
            </Row>
          </div>
          <div className="mb-2">
            <Row className="justify-content-md-center">
                {timeslots.map((timeslotsVal, idx) => {
                    let available = true;
                    for (let i = 0; i < unavailableTimes.length; i++) {
                        if (timeslotsVal.startTime === unavailableTimes[i].time.startTime) {
                            available = false;
                            console.log(`This time ${timeslotsVal.startTime} is unavailable`)
                        }
                    }
                    if (available) {
                        console.log(`This time ${timeslotsVal.startTime} is available`)
                        return (
                            <Button variant="success" as="input" type="button" value={`${timeslotsVal.startTime} ~ ${timeslotsVal.endTime}`} />
                        )
                    }
                })}
            </Row>
            </div>
        </Container>
        )
    }
}

export default TimeSlots;