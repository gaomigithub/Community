import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import { uuid } from 'uuidv4';
import { getDogs } from '../../../graphql/queries';
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";

class Doginfodetails extends React.Component {
  state = {
    dogs: this.props.dogs
  };

  // async componentDidMount() {
  //   const user = await Auth.currentAuthenticatedUser();
  //   await this.getDogs(user.attributes.sub);
  //   console.log("current state dogs" + this.state.dogs);
  // }

  // async getDogs(userID) {
  //   await API.graphql(graphqlOperation(getDogs, {id : userID}))
  //     .then(data => 
  //       data.data.getDogs != null
  //         ? this.setState({
  //             dogs : [{dogName: "123", dogAge: "123", dogBreed: "123" }]
  //           })
  //         : null
  //       // console.log(data.data.getDogs)
  //     )
  //     .catch(err => console.log(err));
  // }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    // this.props.passDogsToParent(this.state.dogs);
    let updatedDogs = [];
    this.state.dogs.map((val, idx) => {
      if (val.dogName !== "") {
        updatedDogs.push(val)
      }
    })
    this.setState({dogs : updatedDogs}, () => {
      console.log("after submit", this.state.dogs);
      this.props.handleDogChange(this.state.dogs);
    })
  };

  handleChange = e => {
    if (["dogName", "age", "breed"].includes(e.target.className)) {
      let dogs = [...this.state.dogs];
      dogs[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase();
      this.setState({ dogs }, () => console.log(this.state.dogs));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  addDog = e => {
    this.setState(prevState => ({
      dogs: [...prevState.dogs, {dogID: uuid(), dogName: "", age: "", breed: "" }]
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    // if (this.props.dogs != null) {
    //   this.setState({ dogs: this.props.dogs });
    // }
    let { dogs } = this.state;
    // console.log("dogs from props " + this.props.dogs);
    
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
