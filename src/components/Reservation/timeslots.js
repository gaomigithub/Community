import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { checkReservation } from "../../graphql/queries";


class TimeSlots extends Component {
    state = {
      timeslots : []
    };

    async componentDidMount() {
        let timeslots = await this.initTime();
        this.setState({timeslots: timeslots })
        console.log(this.state.timeslots)
        this.getUnavailableTime();
    }

    initTime() {
        let timeslots = []
        for (let index = 6; index < 24; index = index + 2) {
            timeslots.push({startTime: index, endTime: index + 2});
        }
        return timeslots
    }

    async getUnavailableTime() {
        await API.graphql(graphqlOperation(checkReservation, {date : "2020-03-26"}))
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }


    render() {
        return (
        <Container >
          <div className="mb-2">
            <Row className="justify-content-md-center">
              <h2>Available Time Slots</h2>
            </Row>
          </div>
          <div className="mb-2">
            <Row className="justify-content-md-center">
                {console.log(this.state.timeslots)}
                {this.state.timeslots.map((val, idx) => {
                    // if (val.startTime !== ) {
                        return (
                            <Button variant="success" as="input" type="button" value={`${val.startTime} ~ ${val.endTime}`} />
                        )
                    // }
                })}
            </Row>
            </div>
        </Container>
        )
    }
}

export default TimeSlots;