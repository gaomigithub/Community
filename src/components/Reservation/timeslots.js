import React, { Component } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { createReservation, deleteReservation } from '../../graphql/mutations'
import { checkReservation } from "../../graphql/queries";
import { uuid } from 'uuidv4';
import { Auth } from 'aws-amplify'


class TimeSlots extends Component {
    state = {
      timeslots : [],
      unavailableTimes: [],
      selectedTimeSlot: null,
      buttonColor: true,
      user: null
    };

    async componentDidMount() {
        let timeslots = await this.initTime();
        this.setState({timeslots : timeslots })
        console.log(this.state.timeslots)

        const user = await Auth.currentAuthenticatedUser();
        this.setState({ user: user });
    }

    async componentDidUpdate(prevProps) {

        if (prevProps.date !== this.props.date || prevProps.type !== this.props.type) {
            let date = this.convertDate(this.props.date)
            console.log(date)
            let unavailableTimes = await this.getUnavailableTime(date);
            let updatedUnavailableTimes = [];
            for (let index = 0; index < unavailableTimes.length; index++) {
                if (this.props.type === unavailableTimes[index].type)
                updatedUnavailableTimes.push(unavailableTimes[index]);
            }
            this.setState({unavailableTimes : updatedUnavailableTimes})
        }
      }

    convertDate(date) {
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth()+1).toString();
        var dd  = date.getDate().toString();
      
        var mmChars = mm.split('');
        var ddChars = dd.split('');
      
        return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
    }

    initTime() {
        let timeslots = []
        for (let index = 5; index < 22; index = index + 2) {
            let prefix1 = index;
            let prefix2 = index + 2;
            if (prefix1 < 10) {
                prefix1 = "0" + prefix1
            }
            if (prefix2 < 10) {
                prefix2 = "0" + prefix2
            }
            timeslots.push({startTime: `${prefix1}:00`, endTime: `${prefix2}:00`});
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

    handleClick = (e) => {
        let t = e.target.value.split(" ~ ")
        let times = {
            startTime: t[0], 
            endTime: t[1]
        }
        this.setState({selectedTimeSlot: times}, () => console.log(this.state.selectedTimeSlot))
    }

    changeColor = () => {
        this.setState({buttonColor: !this.state.buttonColor})
    }

    
    submitChanges = () => {
        let reservationInput = {input: {
            id: uuid(),
            userID: this.state.user.attributes.sub,
            date: this.convertDate(this.props.date),
            time: this.state.selectedTimeSlot,
            type: this.props.type
        }}
        this.addReservation(reservationInput)
    }

    async addReservation(reservationInput) {
        await API.graphql(graphqlOperation(createReservation, reservationInput))
        .then(data => console.log('Create Reservation success ', data))
        .catch(err => console.log('Create Reservation error: ', err))
    }

    render() {
        let btn_class = this.state.buttonColor ? "success" : "warning";
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
                {/* <ToggleButtonGroup type="radio" name="options"> */}
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
                                <Button variant={btn_class} as="input" type="button"
                                value={`${timeslotsVal.startTime} ~ ${timeslotsVal.endTime}`} 
                                onClick={this.handleClick}/>
                            )
                        }
                        // console.log("selected date in timeslots", this.props.date)
                        // console.log("selected type in timeslots", this.props.type)
                    })}
                {/* </ToggleButtonGroup> */}
            </Row>
                <div>
                    <Col></Col>
                    <Col>
                    <div class="row mx-md-3 " style={{ margin: "50px" }}>
                        <Button
                            variant="success"
                            onClick={this.submitChanges}
                            >
                            Submit
                        </Button>
                    </div>
                    </Col>
                    <Col></Col>
                </div>
            </div>
        </Container>
        )
    }
}

export default TimeSlots;