// For User Function Testing
import React, { Component } from 'react';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { createDogCheckIn }  from './graphql/mutations';
import { deleteDogCheckIn }  from './graphql/mutations';
import { getCheckInList } from './graphql/queries';
import { API, graphqlOperation } from "aws-amplify";

Amplify.configure(awsconfig);

class CheckInFunctionTesting extends Component {

    // For User Function Testing
    componentDidMount() {
        // User Input Format Example
        let now = new Date();
        let nowEpoch = Math.floor(now.getTime() / 1000)

        const dogInput ={input : {
            id: "2",
            ownerID: "test2",
            dogName: "John2",
            breed: "a",
            age: "3",
            sex: "MALE",
            creationTime: nowEpoch,
            TTL: nowEpoch + 300
            }
        };

        console.log(now.getTime() / 1000);
        
        this.createDogCheckIn(dogInput)
        // this.getCheckInList("2");
        // this.deleteDogCheckIn('1')
    }
    
    async createDogCheckIn(dogInput) {
        await API.graphql(graphqlOperation(createDogCheckIn, dogInput))
        .then(data => console.log({ data }))
        .catch(err => console.log('error: ', err))
    }
    
    async getCheckInList(id) {
        let currentUser = null;
        await API.graphql(graphqlOperation(getCheckInList, {id: id}))
            .then(data => currentUser = data)
            .catch(err => console.log('error: ', err))
        
        console.log("Get Check In Success ", currentUser)
        console.log(currentUser.data.getUser)
        return currentUser;
    }
    
    async deleteDogCheckIn(dogID) {
        await API.graphql(graphqlOperation(deleteDogCheckIn, {id: dogID}))
        .then(data => console.log("Delete Success ", data.data))
        .catch(err => console.log('error: ', err))
    }
    render() {
        return (
            <div>
                Check In Function Testing
            </div>
        );
    }
}

export default CheckInFunctionTesting;