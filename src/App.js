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
    this.addData();  
  }
  
  // async addData() {

  //   const entry = {id:"6", email:"email6@example.com", createdAt:"2020-2-23"}
  //   const data = await API.graphql(graphqlOperation(addEntry, entry))
  //   console.log(data)
  //   this.setState({data});
  // }
  async addData() {
    const userInput ={input : {
      id: "24",
      firstName: "dan",
      lastName: "zhong",
      userName: "danz",
      userEmail: "dan@example.com",
      userPhone: "1234567890"
      }
    }

    await API.graphql(graphqlOperation(createNewUser, userInput))
      .then(data => console.log({ data }))
      .catch(err => console.log('error: ', err))
    
    // query
    let currentUser = null;
    await API.graphql(graphqlOperation(getCurrentUser, {id: "24"}))
      .then(data => currentUser = data)
      .catch(err => console.log('error: ', err))
    
    console.log("Get User Success ", currentUser)
    console.log(currentUser.data.getCurrentUser)
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