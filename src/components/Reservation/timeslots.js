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

        let unavailableTimes = await this.getUnavailableTime(this.props.date);
        this.setState({unavailableTimes : unavailableTimes})
        console.log(this.state.unavailableTimes)
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.date !== this.props.date) {
            let updatedUnavailableTimes = await this.getUnavailableTime(this.props.date.toISOString().split('T')[0]);
            this.setState({unavailableTimes : updatedUnavailableTimes})
        }

        if (prevProps.type !== this.props.type) {
            let updatedUnavailableTimes = [];
            let unavailableTimes = this.state.unavailableTimes;

            for (let index = 0; index < unavailableTimes.length; index++) {
                if (this.props.type === unavailableTimes[index].type)
                updatedUnavailableTimes.push(unavailableTimes[index]);
            }
            this.setState({unavailableTimes : updatedUnavailableTimes})
        }
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
                            // console.log(`This time ${timeslotsVal.startTime} is unavailable`)
                        }
                    }
                    if (available) {
                        // console.log(`This time ${timeslotsVal.startTime} is available`)
                        return (
                            <Button variant="success" as="input" type="button" value={`${timeslotsVal.startTime} ~ ${timeslotsVal.endTime}`} />
                        )
                    }
                    // console.log("selected date in timeslots", this.props.date)
                    // console.log("selected type in timeslots", this.props.type)
                })}
            </Row>
            </div>
        </Container>
        )
    }
}

export default TimeSlots;