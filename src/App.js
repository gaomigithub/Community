import React from "react";
import Amplify from "aws-amplify";
import { Switch, Route } from "react-router-dom";

import AppWithAuth from "./components/AppWithAuth";
import Landing from "./components/Landing";
// import Login from "./components/Login";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import SignUp from "./components/SignUp";
import awsconfig from "./aws-exports";
// For User Function Testing
// import { createNewUser }  from './graphql/mutations';
// import { updateCurrentUser }  from './graphql/mutations';
// import { getCurrentUser } from './graphql/queries';
// import { API, graphqlOperation } from "aws-amplify";
// import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(awsconfig);

// For User Function Testing
// componentDidMount() {
//   // User Input Format Example
//   const userInput ={input : {
//     id: "30",
//     firstName: "dan",
//     lastName: "zhong",
//     userName: "danz",
//     userEmail: "dan@example.com",
//     userPhone: "1234567890"
//     }
//   };
//   // Retrive User Information by ID
//   const id = "30";
//   // Update User Format Example
//   const updatedUserInput = {input : {
//     id: "30",
//     firstName: "dan",
//     lastName: "zhong",
//     userName: "danz",
//     userEmail: "updateemail@example.com",
//     userPhone: "9876543210"
//     }
//   };

//   // this.addUser(userInput);  
//   // this.getUser(id);
//   // this.updateUser(updatedUserInput);
//   // this.getUser(id);
// }

// async addUser(userInput) {
//   await API.graphql(graphqlOperation(createNewUser, userInput))
//     .then(data => console.log({ data }))
//     .catch(err => console.log('error: ', err))
// }

// async getUser(userID) {
//     let currentUser = null;
//     await API.graphql(graphqlOperation(getCurrentUser, {id: userID}))
//       .then(data => currentUser = data)
//       .catch(err => console.log('error: ', err))
    
//     console.log("Get User Success ", currentUser)
//     console.log(currentUser.data.getCurrentUser)
//     return currentUser;
// }

// async updateUser(userInput) {
//   await API.graphql(graphqlOperation(updateCurrentUser, userInput))
//   .then(data => console.log("Update Success ", data.data))
//   .catch(err => console.log('error: ', err))
// }

export default function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Landing  />
          </Route>
          <Route path="/about">
            hi
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/AppWithAuth">
            <AppWithAuth />
          </Route>
          <Route path="/login"/>
            {/* <Login /> */}
          <Route />
        </Switch>
        <Footer />
    </div>
  );
}
