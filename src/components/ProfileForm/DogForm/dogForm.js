import React, { Component } from "react";
import Doginfodetails from "./doginfodetails";
import Allinfo from "./allinfo";
import { Button, Form, Card } from "react-bootstrap";
import UserForm from "../userform";
class DogForm extends Component {
  state = {
    step: 1,
    dogName: "",
    dogAge: "",
    dogBreed: "",
    aboutMe: "",
    dogs: []
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };


  handleChange(input) {
    const value = input.target.value;
    this.setState({
      ...this.state,
      [input.target.name]: value
    });
  }

  callbackFunction = (dogs) => {
    console.log("sending dogs from doginfodetails")
    console.log(dogs)
    this.setState({dogs: dogs})
    console.log("get dogs from doginfodetails " + this.state.dogs)
  }

  showStep = () => {
    let { dogs } = this.state;
    const { step, dogName, dogAge, dogBreed, aboutMe } = this.state;
    if (step === 1)
      return (
        <Doginfodetails
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          passDogsToParent={this.callbackFunction}
          dogs={this.dogs}
        />
      );

    if (step === 0)
        return(
          <UserForm
          dogs={dogs}
          />          
        )
  };

  handleChange = e => {
    if (["dogName", "dogAge", "dogBreed"].includes(e.target.className)) {
      let dogs = [...this.props.dogs];
      dogs[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ dogs }, () => console.log(this.state.dogs));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addDog = e => {
    e.preventDefault(); // the page will jump to the page of step1 after the click if dont have this for some reason; problem mark.
    this.setState(prevState => ({
      dogs: [...prevState.dogs, { dogName: "", dogAge: "", dogBreed: "" }]
    }));
  };
  render() {
    const { step, dogs } = this.state;
    return (
      <>
        <h2></h2>
        { this.showStep() }
      </>
    );
  }
}
export default DogForm;
