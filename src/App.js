import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { createNewUser }  from './graphql/mutations';
import { getCurrentUser } from './graphql/queries';
import { API, graphqlOperation } from "aws-amplify";
// import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

class App extends React.Component {

  

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // User Input Format Example
    const userInput ={input : {
      id: "25",
      firstName: "dan",
      lastName: "zhong",
      userName: "danz",
      userEmail: "dan@example.com",
      userPhone: "1234567890"
      }
    };
    // Retrive User Information by ID
    const id = "25";
    this.addUser(userInput);  
    this.getUser(id)
  }

  async addUser(userInput) {
    await API.graphql(graphqlOperation(createNewUser, userInput))
      .then(data => console.log({ data }))
      .catch(err => console.log('error: ', err))
  }

  async getUser(userID) {
      let currentUser = null;
      await API.graphql(graphqlOperation(getCurrentUser, {id: userID}))
        .then(data => currentUser = data)
        .catch(err => console.log('error: ', err))
      
      console.log("Get User Success ", currentUser)
      console.log(currentUser.data.getCurrentUser)
      return currentUser;
  }

  render() {

    return (
      <div>
        hi
      </div>
    )
  }
  

}
export default App;