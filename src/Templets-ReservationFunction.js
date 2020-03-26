// For User Function Testing
import React, { Component } from 'react';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { createReservation } from './graphql/mutations';
import { getReservation } from  './graphql/queries';
import { API, graphqlOperation } from "aws-amplify";

Amplify.configure(awsconfig);

class ReservationFunctionTesting extends Component {

    // For Reservation Function Testing
    componentDidMount() {
        // Reservation Input Format Example
        const reservationInput ={ input : {
            id: "1",
            userID: "test",
            date: "2020-03-26",
            time:  
                {
                    startTime: "09:00",
                    endTime: "10:00"
                },
            type: "BASKETBALL"
            }
        };

        const userID = "test";
    
        this.addReservation(reservationInput);  
        this.getReservation(userID);
    }
    
    async addReservation(reservationInput) {
        await API.graphql(graphqlOperation(createReservation, reservationInput))
        .then(data => console.log('Create Reservation success ', data))
        .catch(err => console.log('Create Reservation error: ', err))
    }

    async getReservation(userID) {
        await API.graphql(graphqlOperation(getReservation, {id: userID}))
        .then(data => console.log('Get Reservation from user success ', data ))
        .catch(err => console.log('Get Reservation from user error: ', err))
    }

    render() {
        return (
            <div>
                Reservation Function Testing
            </div>
        );
    }
}

export default ReservationFunctionTesting;