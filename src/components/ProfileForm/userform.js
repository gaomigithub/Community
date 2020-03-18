import React, { Component } from "react";
import UserInfo from "./userinfo.js";
import Userprofileinfo from "./userprofileinfo.js";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { getUser, getDogs} from "../../graphql/queries";
import Doginfodetails from "./DogForm/doginfodetails";
import Allinfo from "./DogForm/allinfo";
import DogForm from "./DogForm/dogForm";

class UserForm extends Component {

  // ISSUE:
  // For the dogs in this state, 
  // 1. we want to get the dogs from DB when the user login, 
  // 2. and then when user update the dog info, input should be sending back to here and display
  // 3. BUT it keeps getting the same data from DB

  state = {
    step: 1,
    // user
    username: "",
    firstName: "",
    lastName: "",
    userEmail: "",
    dogs: []
  };

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    this.setState({ userEmail: user.attributes.email });
    this.setState({ username: user.username });
    console.log("UserForm current User", user);

    this.getUser(user.attributes.sub);
    this.getDogs(user.attributes.sub);
  }

  async getUser(userID) {
    await API.graphql(graphqlOperation(getUser, { id: userID }))
      .then(data =>
        data.data.getUser != null
          ? this.setState({
              firstName: data.data.getUser.firstName,
              lastName: data.data.getUser.lastName
            })
          : null
      )
      .catch(err => console.log(err));
  }

  async getDogs(userID) {
    await API.graphql(graphqlOperation(getDogs, {id : userID}))
      .then((data) => {
        if (data.data.getDogs != null) {
          // const updateDogs = data.data.getDogs
          this.setState({
            dogs : data.data.getDogs
          }, () => console.log("current state dogs " + this.state.dogs))
        }
        // console.log(data.data.getDogs))
      }
        
      )
      .catch(err => console.log(err));
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  goDogs = () => {
    const { step } = this.state;
    this.setState({
      step: 3
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  showStep = () => {
    const {
      step,
      // user
      username,
      firstName,
      lastName,
      userEmail,
      dogs
    } = this.state;

    if (step === 1)
      return (
        <div>
          <Userprofileinfo
            username={username}
            firstName={firstName}
            lastName={lastName}
            userEmail={userEmail}
            prevStep={this.prevStep}
            goDogs={this.goDogs}
            dogs={dogs}
          />

          {/* <Allinfo dogs={this.props.dogs} /> */}
        </div>
      );
    if (step === 2)
      return (
        <div>
          <UserInfo
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            username={username}
            firstName={firstName}
            lastName={lastName}
            userEmail={userEmail}
          />
        </div>
      );
    if (step === 3)
      return (
        <div>
          <DogForm
          dogs = {dogs}
           />
        </div>
      );
  };

  render() {
    const { step } = this.state;
    return <>{this.showStep()}</>;
  }
}

export default UserForm;
