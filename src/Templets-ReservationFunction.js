// For User Function Testing
import React, { Component } from 'react';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { createReservation, deleteReservation } from './graphql/mutations';
import { getReservation, checkReservation } from  './graphql/queries';
import { API, graphqlOperation } from "aws-amplify";

Amplify.configure(awsconfig);

class ReservationFunctionTesting extends Component {

    // For Reservation Function Testing
    componentDidMount() {
        // Reservation Input Format Example
        const reservationInput ={ input : {
            id: "2",
            userID: "test2",
            date: "2020-03-26",
            time:  
                {
                    startTime: "12:00",
                    endTime: "14:00"
                },
            type: "TENNIS"
            }
        };

        const userID = "test2";
    
        // this.addReservation(reservationInput);  
        // this.checkReservation(userID);
        // this.getReservation(userID);
        this.deleteReservation("1");
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

    async checkReservation(userID) {
        await API.graphql(graphqlOperation(checkReservation, {id: userID}))
        .then(data => console.log('Get All Reservation success ', data ))
        .catch(err => console.log('Get All Reservation error: ', err))
    }

    async deleteReservation(id) {
        await API.graphql(graphqlOperation(deleteReservation, {id: id}))
        .then(data => console.log('Delete Reservation success ', data ))
        .catch(err => console.log('Delete Reservation error: ', err))
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