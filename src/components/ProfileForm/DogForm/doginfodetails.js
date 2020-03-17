import React from "react";
import { Button, Form, Card } from "react-bootstrap";
class Doginfodetails extends React.Component {
  state = {
    dogs: [{ dogName: "", dogAge: "", dogBreed: "" }]
  };

  continue = e => {
    e.preventDefault();
    this.props.prevStep();
    // this.props.passDogsToParent(this.state.dogs);
    console.log("after submit", this.state.dogs);
    this.props.handleChange(this.state.dogs);
  };

  handleChange = e => {
    if (["dogName", "dogAge", "dogBreed"].includes(e.target.className)) {
      let dogs = [...this.state.dogs];
      dogs[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ dogs }, () => console.log(this.state.dogs));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  addDog = e => {
    this.setState(prevState => ({
      dogs: [...prevState.dogs, { dogName: "", dogAge: "", dogBreed: "" }]
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    if (this.props.dogs != null) {
      this.setState({ dogs: this.props.dogs });
    }
    let { dogs } = this.state;
    console.log("dogs from props " + this.props.dogs);
    console.log("dogs from dotinfodetails map " + dogs);
    return (
      <Form.Group controlId="formBasicDogForms">
        <Form.Label onChange={this.handleChange}>
          If you have a pet, please fill out your dogs' profiles
          <button onClick={this.addDog}>Add a dog</button>
          {dogs.map((val, idx) => {
            let dogId = `dog-${idx}`,
              ageId = `age-${idx}`,
              breedId = `breed-${idx}`;
            return (
              <div key={idx}>
                <label htmlFor={dogId}>{`Dog #${idx + 1}`}</label>
                <input
                  type="text"
                  name={dogId}
                  data-id={idx}
                  id={dogId}
                  placeholder="Dog Name"
                  value={val.dogName}
                  className="dogName"
                />

                <label htmlFor={ageId}>Age</label>
                <input
                  type="numeric"
                  name={ageId}
                  data-id={idx}
                  id={ageId}
                  placeholder="Dog Age"
                  value={dogs[idx].name}
                  className="dogAge"
                />

                <label htmlFor={breedId}>Breed</label>
                <input
                  type="text"
                  name={breedId}
                  data-id={idx}
                  id={breedId}
                  placeholder="Dog Breed"
                  value={dogs[idx].name}
                  className="dogBreed"
                />
              </div>
            );
          })}
        </Form.Label>
        <div>
          <button variant="success" className="Submit" onClick={this.continue}>
            Next
          </button>
        </div>
      </Form.Group>
    );
  }
}

export default Doginfodetails;
