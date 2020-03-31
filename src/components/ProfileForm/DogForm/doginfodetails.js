import React from "react";
import { Form, Row, Button } from "react-bootstrap";
import { uuid } from "uuidv4";

class Doginfodetails extends React.Component {
  state = {
    dogs: this.props.dogs
  };

  continue = async e => {
    e.preventDefault();
    // this.props.passDogsToParent(this.state.dogs);
    let updatedDogs = [];
    await this.state.dogs.map((val, idx) => {
      if (val.dogName !== "") {
        updatedDogs.push(val);
      }
    });
    await this.setState({ dogs: updatedDogs }, () => {
      console.log("after submit", this.state.dogs);
      this.props.handleDogChange(this.state.dogs);
    });
    this.props.nextStep();
  };

  handleChange = e => {
    if (["dogName", "age", "breed"].includes(e.target.className)) {
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
      dogs: [
        ...prevState.dogs,
        { dogID: uuid(), dogName: "", age: "", breed: "" }
      ]
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    let { dogs } = this.state;

    return (
      <Form.Group controlId="formBasicDogForms">
        <Form.Label onChange={this.handleChange}>
          If you have a pet, please fill out your dogs' profiles
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
                  value={val != null ? val.dogName : dogs[idx].name}
                  className="dogName"
                />

                <label htmlFor={ageId}>Age</label>
                <input
                  type="numeric"
                  name={ageId}
                  data-id={idx}
                  id={ageId}
                  placeholder="Dog Age"
                  value={val != null ? val.age : dogs[idx].name}
                  className="age"
                />

                <label htmlFor={breedId}>Breed</label>
                <input
                  type="text"
                  name={breedId}
                  data-id={idx}
                  id={breedId}
                  placeholder="Dog Breed"
                  value={val != null ? val.breed : dogs[idx].name}
                  className="breed"
                />
                <button>Delete</button>
              </div>
            );
          })}
        </Form.Label>
        <Row>
          {" "}
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <Button variant="success" onClick={this.addDog}>
              Add a dog
            </Button>
          </div>
          <div>
            <Button
              variant="success"
              className="Submit"
              onClick={this.continue}
            >
              Next
            </Button>
          </div>
        </Row>
      </Form.Group>
    );
  }
}

export default Doginfodetails;
