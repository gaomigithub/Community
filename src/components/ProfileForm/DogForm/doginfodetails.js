import React from "react";
import { Form, Row, Button, Card, CardColumns, Col } from "react-bootstrap";
import { uuid } from "uuidv4";
import { API, graphqlOperation } from "aws-amplify";
import { deleteDog } from "../../../graphql/mutations";
import DogImageUpload from "../dogphoto";

class Doginfodetails extends React.Component {
  state = {
    dogs: this.props.dogs,
  };

  continue = async (e) => {
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

  handleChange = (e) => {
    if (["dogName", "age", "breed"].includes(e.target.className)) {
      let dogs = [...this.state.dogs];
      console.log(dogs)
      dogs[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ dogs }, () => console.log(this.state.dogs));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  handleDogImgChange = (curDogID, dogImgUrl) => {
    let dogs = this.state.dogs;
    let curDog = dogs.find(dog => dog.id === curDogID)
    curDog.picture = dogImgUrl
    this.setState({ dogs })
  }

  addDog = (e) => {
    this.setState((prevState) => ({
      dogs: [
        ...prevState.dogs,
        { dogID: uuid(), dogName: "", age: "", breed: "", picture: "NULL" },
      ],
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  delete = async (event) => {
    let dogs = [...this.state.dogs];
    let dogID = this.state.dogs[event.target.id].id;

    dogs.splice(event.target.id, 1);
    this.setState({ dogs: dogs });

    await API.graphql(graphqlOperation(deleteDog, { id: `${dogID}` }))
      .then((data) => console.log("Detele Dog Success", data))
      .catch((err) => console.log("Detele Dog error", err));
  };

  render() {
    let { dogs } = this.state;

    return (
      <div >
        <Row>
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
        <br />
        <CardColumns onChange={this.handleChange}>
          <Row>
            {dogs.map((val, idx) => {
              let dogId = `dog-${idx}`,
                ageId = `age-${idx}`,
                breedId = `breed-${idx}`;
                console.log(val.id)
              return (
                <Col md={4} lg={6} key={idx}>
                  <Card >
                    <DogImageUpload 
                      handleDogImgChange={this.handleDogImgChange}
                      dogId={val.id}/>
                    <label style={{ width: "50px" }} htmlFor={dogId}>{`Dog #${
                      idx + 1
                    }`}</label>
                    <input
                      type="text"
                      name={dogId}
                      data-id={idx}
                      id={dogId}
                      placeholder="Dog Name"
                      defaultValue={val != null ? val.dogName : dogs[idx].name}
                      className="dogName"
                    />
                    <br />
                    <label style={{ width: "50px" }} htmlFor={ageId}>
                      Age
                    </label>
                    <input
                      type="numeric"
                      name={ageId}
                      data-id={idx}
                      id={ageId}
                      placeholder="Dog Age"
                      defaultValue={val != null ? val.age : dogs[idx].name}
                      className="age"
                    />
                    <br />
                    <label style={{ width: "50px" }} htmlFor={breedId}>
                      Breed
                    </label>
                    <input
                      type="text"
                      name={breedId}
                      data-id={idx}
                      id={breedId}
                      placeholder="Dog Breed"
                      defaultValue={val != null ? val.breed : dogs[idx].name}
                      className="breed"
                    />
                    <Card.Footer className="text-muted">
                      <Button
                        variant="warning"
                        style={{ height: "100%", width: "100%" }}
                        id={idx}
                        onClick={this.delete}
                      >
                        Delete
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </CardColumns>
      </div>
    );
  }
}

export default Doginfodetails;
