// For User Function Testing
import React, { Component } from 'react';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { createDog }  from './graphql/mutations';
// import { updateDog }  from './graphql/mutations';
// import { getDogs } from './graphql/queries';
import { API, graphqlOperation } from "aws-amplify";

Amplify.configure(awsconfig);

class UserFunctionTesting extends Component {

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
        // // Retrive User Information by ID
        // const id = "30";
        // // Update User Format Example
        // const updatedUserInput = {input : {
        //     id: "30",
        //     firstName: "dan",
        //     lastName: "zhong",
        //     userName: "danz",
        //     userEmail: "updateemail@example.com",
        //     userPhone: "9876543210"
        //     }
        // };
    
        this.addDog(dogInput);  
        // this.getUser(id);
        // this.updateUser(updatedUserInput);
        // this.getUser(id);
    }
    
    async addDog(dogInput) {
        await API.graphql(graphqlOperation(createDog, dogInput))
        .then(data => console.log({ data }))
        .catch(err => console.log('error: ', err))
    }
    
    // async getUser(userID) {
    //     let currentUser = null;
    //     await API.graphql(graphqlOperation(getUser, {id: userID}))
    //         .then(data => currentUser = data)
    //         .catch(err => console.log('error: ', err))
        
    //     console.log("Get User Success ", currentUser)
    //     console.log(currentUser.data.getUser)
    //     return currentUser;
    // }
    
    // async updateUser(userInput) {
    //     await API.graphql(graphqlOperation(updateUser, userInput))
    //     .then(data => console.log("Update Success ", data.data))
    //     .catch(err => console.log('error: ', err))
    // }
    render() {
        return (
            <div>
                User Function Testing
            </div>
        );
    }
}

export default UserFunctionTesting;