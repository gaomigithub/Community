import React, { Component } from 'react';
import Doginfodetails from './Doginfodetails';


export class DogForm extends Component {
    state = {
        step:1,
        dogName: '',
        dogAge: '',
        dogBreed:'',
        dogInfo:'',
    };

// To proceed to the next step
nextstep = () => {
    const {step} = this.state;
    this.setState({
        step: step + 1
    });
};

// To go back to previous step
prevStep = () => {
    const {step} = this.state;
    this.setState({
        step: step - 1
    });
};

//Handle fields change
//Each input will have its own state.
handlechange = input => e => {
    this.setState({[input]: e.target.value});
};
render (){
    const {step} =this.state;
    const { dogName, dogAge, dogBreed, dogInfo } =  this.state;
    const values = {dogName, dogAge, dogBreed, dogInfo}; 
    
    switch(step){
        case 1: 
            return (
                <Doginfodetails 
                    nextstep={this.nextstep}
                    handlechange={this.handlechange}
                    values={values}
                />

            );
        case 2: 
            return <h1>DogPersonalDetails</h1>;
        case 3:
            return <h1>Confirm</h1>;
        case 4:
            return <h1>Success</h1>;

        }
    }
}
export default DogForm;