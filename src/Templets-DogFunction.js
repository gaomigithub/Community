// For User Function Testing
import React, { Component } from 'react';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { createDog }  from './graphql/mutations';
import { updateDog }  from './graphql/mutations';
import { getDogs } from './graphql/queries';
import { API, graphqlOperation } from "aws-amplify";

Amplify.configure(awsconfig);

class DogFunctionTesting extends Component {

    // For User Function Testing
    componentDidMount() {
        // User Input Format Example
        const dogInput ={input : {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            breed: "Lab",
            dob: "2020-01-01",
            sex: "MALE",
            bio: "Bio Temp",
            owner: {
                id: "30",
                firstName: "dan",
                lastName: "zhong",
                userName: "danz",
                userEmail: "updateemail@example.com",
                userPhone: "9876543210"}
            }
        };
        // Retrive Dog Information by ID
        const id = "2";
        // Update User Format Example
        const updatedDogInput = {input : {
            id: "2",
            firstName: "John",
            lastName: "Doe",
            breed: "Lab",
            dob: "2020-01-01",
            sex: "MALE",
            bio: "Bio Temp"
            }
        };
    
        // this.addDog(dogInput);  
        // this.getDog(id);
        this.updateDog(updatedDogInput);
        this.getDog(id);
    }
    
    async addDog(dogInput) {
        await API.graphql(graphqlOperation(createDog, dogInput))
        .then(data => console.log({ data }))
        .catch(err => console.log('error: ', err))
    }
    
    async getDog(dogID) {
        let currentDog = null;
        await API.graphql(graphqlOperation(getDogs, {id: dogID}))
            .then(data => currentDog = data)
            .catch(err => console.log('error: ', err))
        
        console.log("Get Dog Success ", currentDog)
        console.log(currentDog.data.getDog)
        return currentDog;
    }
    
    async updateDog(dogInput) {
        await API.graphql(graphqlOperation(updateDog, dogInput))
        .then(data => console.log("Update Success ", data.data))
        .catch(err => console.log('error: ', err))
    }
    render() {
        return (
            <div>
                Dog Function Testing
            </div>
        );
    }
}

export default DogFunctionTesting;