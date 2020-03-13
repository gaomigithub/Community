import React from "react";
class Doginfodetails extends React.Component {
  state = {
    dogs: [{ dogName: "", dogAge: "", dogBreed: "" }]
  };
  handleChange = e => {
    if (["dogName", "dogAge", "dogBreed"].includes(e.target.className)) {
      let dogs = [...this.state.dogs];
      dogs[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ dogs }, () => console.log(this.state.cats));
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
    let { dogs } = this.state;
    return (
      <form>
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
                className="dogName"
              />

              <label htmlFor={ageId}>Age</label>
              <input
                type="numeric"
                name={ageId}
                data-id={idx}
                id={ageId}
                placeholder="Dog Age"
                className="dogAge"
              />

              <label htmlFor={breedId}>Breed</label>
              <input
                type="text"
                name={breedId}
                data-id={idx}
                id={breedId}
                placeholder="Dog Breed"
                className="dogBreed"
              />
            </div>
          );
        })}
      </form>
    );
  }
}

export default Doginfodetails;
